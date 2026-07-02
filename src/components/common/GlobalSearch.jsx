import { useMemo, useState } from "react";
import {
  TextField,
  InputAdornment,
  Paper,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const modules = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Procurement", path: "/procurement" },
  { label: "Vendors", path: "/vendors" },
  { label: "Risk", path: "/risk" },
  { label: "Compliance", path: "/compliance" },
  { label: "Audit", path: "/audit" },
  { label: "Reports", path: "/reports" },
  { label: "Settings", path: "/settings" },
  { label: "Notifications", path: "/notifications" },
];

const GlobalSearch = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const results = useMemo(() => {
    if (!search.trim()) return [];

    const keyword = search.trim().toLowerCase();

    return modules.filter((item) =>
      item.label.toLowerCase().startsWith(keyword)
    );
  }, [search]);

  const handleSelect = (item) => {
    navigate(item.path);
    setSearch("");
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: 350,
      }}
    >
      <TextField
        fullWidth
        size="small"
        placeholder="Search modules..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {search.trim() && (
        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            width: "100%",
            mt: 1,
            zIndex: 2000,
            maxHeight: 300,
            overflow: "auto",
            borderRadius: 2,
          }}
        >
          <List disablePadding>
            <ListItemButton disabled>
              <SearchIcon
                fontSize="small"
                sx={{
                  mr: 2,
                  color: "text.secondary",
                }}
              />

              <ListItemText
                primary={search}
                secondary="Search"
                primaryTypographyProps={{
                  fontWeight: 600,
                }}
              />
            </ListItemButton>

            <Divider />

            {results.length > 0 ? (
              results.map((item) => (
                <ListItemButton
                  key={item.path}
                  onClick={() => handleSelect(item)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ))
            ) : (
              <ListItemButton disabled>
                <ListItemText primary="No matching module found" />
              </ListItemButton>
            )}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default GlobalSearch;
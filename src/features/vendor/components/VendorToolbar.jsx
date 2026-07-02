import {
  Box,
  TextField,
  MenuItem,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const VendorToolbar = ({
  search,
  setSearch,
  status,
  setStatus,
  risk,
  setRisk,
  }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 3,
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <TextField
        size="small"
        placeholder="Search Vendor..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        sx={{ minWidth: 300 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        select
        size="small"
        label="Status"
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        sx={{ width: 180 }}
      >
        <MenuItem value="">
          All
        </MenuItem>

        <MenuItem value="Approved">
          Approved
        </MenuItem>

        <MenuItem value="Pending">
          Pending
        </MenuItem>

        <MenuItem value="Rejected">
          Rejected
        </MenuItem>
      </TextField>

      <TextField
        select
        size="small"
        label="Risk"
        value={risk}
        onChange={(e) =>
          setRisk(e.target.value)
        }
        sx={{ width: 180 }}
      >
        <MenuItem value="">
          All
        </MenuItem>

        <MenuItem value="Low">
          Low
        </MenuItem>

        <MenuItem value="Medium">
          Medium
        </MenuItem>

        <MenuItem value="High">
          High
        </MenuItem>
      </TextField>

      <Box sx={{ flexGrow: 1 }} />

    </Box>
  );
};

export default VendorToolbar;
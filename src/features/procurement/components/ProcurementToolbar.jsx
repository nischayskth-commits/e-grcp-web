import {
  Box,
  TextField,
  MenuItem,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import ExportButton from "./ExportButton";

const ProcurementToolbar = ({
  search,
  setSearch,
  status,
  setStatus,
  department,
  setDepartment,
  data,
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
        placeholder="Search Procurement..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        InputProps={{
          startAdornment: (
            <SearchIcon sx={{ mr: 1 }} />
          ),
        }}
        sx={{ minWidth: 320 }}
      />

      <TextField
        select
        size="small"
        label="Status"
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        sx={{ width: 170 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Pending">
          Pending
        </MenuItem>
        <MenuItem value="Approved">
          Approved
        </MenuItem>
        <MenuItem value="Rejected">
          Rejected
        </MenuItem>
      </TextField>

      <TextField
        select
        size="small"
        label="Department"
        value={department}
        onChange={(e) =>
          setDepartment(e.target.value)
        }
        sx={{ width: 190 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="IT">IT</MenuItem>
        <MenuItem value="Finance">
          Finance
        </MenuItem>
        <MenuItem value="Administration">
          Administration
        </MenuItem>
        <MenuItem value="Infrastructure">
          Infrastructure
        </MenuItem>
        <MenuItem value="Security">
          Security
        </MenuItem>
      </TextField>

      <Box sx={{ flexGrow: 1 }} />

      <ExportButton data={data} />
    </Box>
  );
};

export default ProcurementToolbar;
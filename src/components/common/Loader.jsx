import {
  Box,
  CircularProgress,
} from "@mui/material";

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      py={4}
    >
      <CircularProgress size={32} />
    </Box>
  );
};

export default Loader;
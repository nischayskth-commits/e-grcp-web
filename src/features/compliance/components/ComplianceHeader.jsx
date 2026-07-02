import {
  Box,
  Typography,
  Button,
} from "@mui/material";

import {
  ArrowBack,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

const ComplianceHeader = ({
  compliance,
}) => {

  const navigate =
    useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={4}
      flexWrap="wrap"
      gap={2}
    >

      <Box>

        <Button
          startIcon={<ArrowBack />}
          onClick={() =>
            navigate("/compliance")
          }
          sx={{ mb: 2 }}
        >
          Back to Compliance
        </Button>

        <Typography
          variant="h4"
          fontWeight="bold"
        >
          {compliance.title}
        </Typography>

        <Typography
          color="text.secondary"
        >
          {compliance.id}
        </Typography>

      </Box>

    </Box>
  );
};

export default ComplianceHeader;
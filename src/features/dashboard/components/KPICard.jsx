import { memo } from "react";

import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const KPICard = ({
  title,
  value,
  icon,
  color,
}) => {
  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 3,
        transition: "0.3s",
        borderLeft: `6px solid ${color}`,
        "&:hover": {
          transform: "translateY(-6px)",
        },
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {title}
          </Typography>

          {icon}
        </Box>

        <Typography
          mt={2}
          variant="h4"
          fontWeight="bold"
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default memo(KPICard);
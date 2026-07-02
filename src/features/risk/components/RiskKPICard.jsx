import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const RiskKPICard = ({
  title,
  value,
  icon,
  color,
}) => {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
      }}
    >
      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >

          <Box>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              mt={1}
            >
              {value}
            </Typography>

          </Box>

          <Box
            sx={{
              bgcolor: `${color}20`,
              color: color,
              p: 2,
              borderRadius: 2,
            }}
          >
            {icon}
          </Box>

        </Box>

      </CardContent>
    </Card>
  );
};

export default RiskKPICard;
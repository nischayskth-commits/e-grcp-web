import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const VendorKPICard = ({
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
        borderLeft: `6px solid ${color}`,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
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
            variant="body2"
            color="text.secondary"
          >
            {title}
          </Typography>

          {icon}
        </Box>

        <Typography
          variant="h4"
          fontWeight="bold"
          mt={2}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VendorKPICard;
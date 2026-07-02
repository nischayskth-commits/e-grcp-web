import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";

const ActivityFeed = ({ audits }) => {
  return (
    <Card elevation={3} sx={{ borderRadius: 3 }}>
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          Recent Activities
        </Typography>

        {audits.map((audit, index) => (
          <Box key={audit.id}>

            <Typography fontWeight="bold">
              {audit.activity}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {audit.auditor}
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
            >
              {audit.date} • {audit.time}
            </Typography>

            {index !== audits.length - 1 && (
              <Divider sx={{ my: 2 }} />
            )}

          </Box>
        ))}

      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
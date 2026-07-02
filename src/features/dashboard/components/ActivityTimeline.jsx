import {
  Card,
  CardContent,
  Typography,
  Divider,
  Stack,
} from "@mui/material";

const ActivityTimeline = ({ data }) => {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        bgcolor: "background.paper",
        color: "text.primary",
        transition: "0.3s",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          color="text.primary"
          mb={2}
        >
          Recent Activities
        </Typography>

        <Stack spacing={2}>
          {data.map((item, index) => (
            <div key={item.id}>
              <Typography
                variant="caption"
                color="primary"
              >
                {item.time}
              </Typography>

              <Typography
                variant="body2"
                color="text.primary"
              >
                {item.activity}
              </Typography>

              {index < data.length - 1 && (
                <Divider sx={{ mt: 1 }} />
              )}
            </div>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;
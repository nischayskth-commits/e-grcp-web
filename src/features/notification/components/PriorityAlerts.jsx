import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";

import WarningIcon from "@mui/icons-material/Warning";

const PriorityAlerts = ({
  notifications,
}) => {

  const alerts =
    notifications.filter(
      (n) => n.priority === "High"
    );

  return (
    <Card
      elevation={3}
      sx={{ borderRadius: 3 }}
    >
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          Priority Alerts
        </Typography>

        <List>

          {alerts.map((item) => (

            <ListItem
              key={item.id}
              divider
            >

              <ListItemText
                primary={
                  item.title
                }
                secondary={
                  item.message
                }
              />

              <Chip
                icon={<WarningIcon />}
                label="High"
                color="error"
                size="small"
              />

            </ListItem>

          ))}

        </List>

      </CardContent>
    </Card>
  );
};

export default PriorityAlerts;
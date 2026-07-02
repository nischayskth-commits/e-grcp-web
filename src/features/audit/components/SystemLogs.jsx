import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";

const SystemLogs = ({ audits }) => {
  return (
    <Card elevation={3} sx={{ borderRadius: 3 }}>
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          System Logs
        </Typography>

        <List>

          {audits.map((audit) => (

            <ListItem
              key={audit.id}
              divider
            >

              <ListItemText
                primary={audit.systemLog}
                secondary={`${audit.date} • ${audit.time}`}
              />

              <Chip
                label={audit.status}
                color={
                  audit.status === "Completed"
                    ? "success"
                    : audit.status === "Pending"
                    ? "warning"
                    : "info"
                }
                size="small"
              />

            </ListItem>

          ))}

        </List>

      </CardContent>
    </Card>
  );
};

export default SystemLogs;
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Button,
  Stack,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

import {
  useDispatch,
} from "react-redux";

import {
  markAsRead,
  markAsUnread,
} from "../redux/notificationSlice";

const NotificationList = ({
  notifications,
}) => {

  const dispatch =
    useDispatch();

  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
      }}
    >
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          Real-Time Notifications
        </Typography>

        <List>

          {notifications.map(
            (item) => (

              <ListItem
                key={item.id}
                divider
                sx={{
                  py: 2,
                }}
              >

                <NotificationsIcon
                  color="primary"
                  sx={{
                    mr: 2,
                    mt: 0.5,
                  }}
                />

                <ListItemText
                  primary={
                    item.title
                  }
                  secondary={`${item.message} • ${item.time}`}
                />

                <Stack
                  spacing={1}
                  alignItems="flex-end"
                >

                  <Chip
                    label={
                      item.status
                    }
                    color={
                      item.status ===
                      "Unread"
                        ? "primary"
                        : "success"
                    }
                    variant={
                      item.status ===
                      "Unread"
                        ? "filled"
                        : "outlined"
                    }
                    size="small"
                  />

                  {item.status ===
                  "Unread" ? (

                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() =>
                        dispatch(
                          markAsRead(
                            item.id
                          )
                        )
                      }
                    >
                      Mark as Read
                    </Button>

                  ) : (

                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() =>
                        dispatch(
                          markAsUnread(
                            item.id
                          )
                        )
                      }
                    >
                      Mark as Unread
                    </Button>

                  )}

                </Stack>

              </ListItem>

            )
          )}

        </List>

      </CardContent>
    </Card>
  );
};

export default NotificationList;
import {
  Menu,
  MenuItem,
  Typography,
  Divider,
  Box,
} from "@mui/material";

const notifications = [
  {
    id: 1,
    title: "Procurement Request Approved",
    time: "10 min ago",
  },
  {
    id: 2,
    title: "Vendor ABC was onboarded",
    time: "1 hour ago",
  },
  {
    id: 3,
    title: "Compliance Report Uploaded",
    time: "Today",
  },
];

const NotificationMenu = ({
  anchorEl,
  open,
  onClose,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 340,
        },
      }}
    >
      <Box px={2} py={1}>
        <Typography
          variant="h6"
          fontWeight="bold"
        >
          Notifications
        </Typography>
      </Box>

      <Divider />

      {notifications.map((item) => (
        <MenuItem
          key={item.id}
          onClick={onClose}
        >
          <Box>
            <Typography fontWeight="bold">
              {item.title}
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
            >
              {item.time}
            </Typography>
          </Box>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default NotificationMenu;
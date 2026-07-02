import { useEffect } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";

import {
  Notifications,
  MarkEmailUnread,
  PriorityHigh,
  ArrowBack,
} from "@mui/icons-material";

import Loader from "../../../components/common/Loader";

import {
  fetchNotifications,
} from "../redux/notificationSlice";

import NotificationCard from "../components/NotificationCard";
import PriorityAlerts from "../components/PriorityAlerts";
import NotificationList from "../components/NotificationList";

const NotificationDashboard = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    notifications,
    loading,
    error,
  } = useSelector(
    (state) => state.notification
  );

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error) {
    return (
      <Typography color="error">
        {error}
      </Typography>
    );
  }

  const total = notifications.length;

  const unread = notifications.filter(
    (n) => n.status === "Unread"
  ).length;

  const high = notifications.filter(
    (n) => n.priority === "High"
  ).length;

  return (
    <Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
      >

        <Box>

          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Notification Center
          </Typography>

          <Typography
            color="text.secondary"
          >
            Manage all system notifications and priority alerts.
          </Typography>

        </Box>

        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={() =>
            navigate("/dashboard")
          }
        >
          Back to Dashboard
        </Button>

      </Box>

      <Grid
        container
        spacing={3}
        my={3}
      >

        <Grid size={{ xs: 12, md: 4 }}>
          <NotificationCard
            title="Total Notifications"
            value={total}
            icon={<Notifications />}
            color="#1976d2"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <NotificationCard
            title="Unread"
            value={unread}
            icon={<MarkEmailUnread />}
            color="#ed6c02"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <NotificationCard
            title="Priority Alerts"
            value={high}
            icon={<PriorityHigh />}
            color="#d32f2f"
          />
        </Grid>

      </Grid>

      <Grid
        container
        spacing={3}
      >

        <Grid size={{ xs: 12, md: 4 }}>
          <PriorityAlerts
            notifications={notifications}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <NotificationList
            notifications={notifications}
          />
        </Grid>

      </Grid>

    </Box>
  );
};

export default NotificationDashboard;
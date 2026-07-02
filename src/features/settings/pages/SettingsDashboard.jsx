import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../theme/themeSlice";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Grid,
  Button,
  Divider,
  Snackbar,
  Alert,
  Switch,
  FormControlLabel,
  MenuItem,
  IconButton,
  InputAdornment,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const STORAGE_KEY = "user_settings";

const defaultSettings = {
  profile: {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "9876543210",
  },
  theme: {
    darkMode: false,
  },
  preferences: {
    language: "English",
    emailNotifications: true,
    smsNotifications: false,
  },
  security: {
    password: "admin123",
  },
};

const SettingsDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.theme.mode);
  const { user } = useSelector(
  (state) => state.auth
);

  const [settings, setSettings] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Visibility States for Password Fields
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const saveSettings = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));

    setSnackbar({
      open: true,
      severity: "success",
      message: "Settings saved successfully.",
    });
  };

  const updatePassword = () => {
    const savedPassword = settings.security.password.trim();
    const enteredPassword = currentPassword.trim();

    if (enteredPassword !== savedPassword) {
      setSnackbar({
        open: true,
        severity: "error",
        message: "Current password is incorrect.",
      });
      return;
    }

    if (newPassword.trim() === savedPassword) {
      setSnackbar({
        open: true,
        severity: "warning",
        message: "New password must be different from the current password.",
      });
      return;
    }

    if (newPassword.trim() !== confirmPassword.trim()) {
      setSnackbar({
        open: true,
        severity: "error",
        message: "Passwords do not match.",
      });
      return;
    }

    if (newPassword.trim().length < 6) {
      setSnackbar({
        open: true,
        severity: "warning",
        message: "Password must be at least 6 characters.",
      });
      return;
    }

    const updated = {
      ...settings,
      security: {
        password: newPassword,
      },
    };

    setSettings(updated);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    setSnackbar({
      open: true,
      severity: "success",
      message: "Password updated successfully.",
    });
  };

  return (
    <Box p={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            User Settings
          </Typography>

          <Typography color="text.secondary">
            Manage your profile, theme, preferences and security.
          </Typography>
        </Box>

        {user?.role !== "Auditor" && (
  <Button
    variant="outlined"
    startIcon={<ArrowBackIcon />}
    onClick={() => navigate("/dashboard")}
  >
    Back to Dashboard
  </Button>
)}
      </Box>

      <Paper
        sx={{
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Profile
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="First Name"
              value={settings.profile.firstName}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  profile: {
                    ...settings.profile,
                    firstName: e.target.value,
                  },
                })
              }
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Last Name"
              value={settings.profile.lastName}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  profile: {
                    ...settings.profile,
                    lastName: e.target.value,
                  },
                })
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              value={settings.profile.email}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  profile: {
                    ...settings.profile,
                    email: e.target.value,
                  },
                })
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone"
              value={settings.profile.phone}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  profile: {
                    ...settings.profile,
                    phone: e.target.value,
                  },
                })
              }
            />
          </Grid>
        </Grid>

        <Button variant="contained" sx={{ mt: 3 }} onClick={saveSettings}>
          Save Profile
        </Button>

        <Divider sx={{ my: 4 }} />

        {/* Theme Section */}
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Theme
        </Typography>

        <FormControlLabel
          control={
            <Switch
              checked={mode === "dark"}
              onChange={() => {
                dispatch(toggleTheme());

                setSettings({
                  ...settings,
                  theme: {
                    darkMode: mode !== "dark",
                  },
                });
              }}
            />
          }
          label="Dark Mode"
        />

        <Button variant="contained" sx={{ mt: 2 }} onClick={saveSettings}>
          Save Theme
        </Button>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" fontWeight="bold" mb={2}>
          Preferences
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              select
              fullWidth
              label="Language"
              value={settings.preferences.language}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  preferences: {
                    ...settings.preferences,
                    language: e.target.value,
                  },
                })
              }
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
              <MenuItem value="Kannada">Kannada</MenuItem>
              <MenuItem value="Tamil">Tamil</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        <FormControlLabel
          control={
            <Switch
              checked={settings.preferences.emailNotifications}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  preferences: {
                    ...settings.preferences,
                    emailNotifications: e.target.checked,
                  },
                })
              }
            />
          }
          label="Email Notifications"
        />

        <br />

        <FormControlLabel
          control={
            <Switch
              checked={settings.preferences.smsNotifications}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  preferences: {
                    ...settings.preferences,
                    smsNotifications: e.target.checked,
                  },
                })
              }
            />
          }
          label="SMS Notifications"
        />

        <br />

        <Button variant="contained" sx={{ mt: 2 }} onClick={saveSettings}>
          Save Preferences
        </Button>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" fontWeight="bold" mb={2}>
          Security
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type={showCurrentPassword ? "text" : "password"}
              label="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      edge="end"
                    >
                      {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type={showNewPassword ? "text" : "password"}
              label="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      edge="end"
                    >
                      {showNewPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type={showConfirmPassword ? "text" : "password"}
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 3 }}
          onClick={updatePassword}
        >
          Update Password
        </Button>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() =>
          setSnackbar({
            ...snackbar,
            open: false,
          })
        }
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          onClose={() =>
            setSnackbar({
              ...snackbar,
              open: false,
            })
          }
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SettingsDashboard;
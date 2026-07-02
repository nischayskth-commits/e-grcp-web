import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../features/auth/redux/authSlice";
import { toggleTheme } from "../../theme/themeSlice";

import GlobalSearch from "./GlobalSearch";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector(
    (state) => state.auth
  );

  const { mode } = useSelector(
    (state) => state.theme
  );

  const unreadCount = useSelector(
    (state) =>
      state.notification?.notifications?.filter(
        (notification) =>
          notification.status === "Unread"
      ).length || 0
  );

  const [profileAnchor, setProfileAnchor] =
    useState(null);

  const handleLogout = () => {
    setProfileAnchor(null);

    dispatch(logout());

    navigate("/login", {
      replace: true,
    });
  };

  const handleProfile = () => {
    setProfileAnchor(null);

    navigate("/settings");
  };

  return (
    <AppBar
      position="sticky"
      elevation={1}
      color="inherit"
      sx={{
        bgcolor: "background.paper",
        borderBottom: (theme) =>
          `1px solid ${theme.palette.divider}`,
        zIndex: (theme) =>
          theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>

        {/* Logo */}

        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
          sx={{
            whiteSpace: "nowrap",
            minWidth: 120,
            mr: 3,
          }}
        >
          e-GRCP
        </Typography>

        {/* Global Search */}

        <Box
          sx={{
            width: 380,
            ml: 1,
          }}
        >
          <GlobalSearch />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Theme Switch */}

        <IconButton
          onClick={() =>
            dispatch(toggleTheme())
          }
        >
          {mode === "light" ? (
            <DarkModeIcon />
          ) : (
            <LightModeIcon />
          )}
        </IconButton>

        {/* Notifications */}

        <IconButton
          onClick={() =>
            navigate("/notifications")
          }
        >
          <Badge
            badgeContent={unreadCount}
            color="error"
          >
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>

        {/* User Details */}

        <Box
          sx={{
            textAlign: "right",
            mx: 2,
          }}
        >
          <Typography
            fontWeight="bold"
          >
            {user?.role}
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
          >
            {user?.department}
          </Typography>
        </Box>

        {/* Avatar */}

        <IconButton
          onClick={(e) =>
            setProfileAnchor(
              e.currentTarget
            )
          }
        >
          <Avatar
            sx={{
              bgcolor: "primary.main",
              width: 42,
              height: 42,
            }}
          >
            {user?.role?.charAt(0)}
          </Avatar>
        </IconButton>

        {/* Profile Menu */}

        <Menu
          anchorEl={profileAnchor}
          open={Boolean(profileAnchor)}
          onClose={() =>
            setProfileAnchor(null)
          }
        >
          <MenuItem
            onClick={handleProfile}
          >
            <AccountCircleIcon
              sx={{ mr: 1 }}
            />
            Profile
          </MenuItem>

          <MenuItem
            onClick={handleLogout}
          >
            <LogoutIcon
              sx={{ mr: 1 }}
            />
            Logout
          </MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
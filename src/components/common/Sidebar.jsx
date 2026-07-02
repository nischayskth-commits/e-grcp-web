import { useCallback } from "react";

import { Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import rolePermissions from "../../config/rolePermissions";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useSelector(
    (state) => state.auth
  );

  const permissions =
    rolePermissions[user?.role]?.pages || [];

  const menuItems = [
    {
      label: "Dashboard",
      path: "/dashboard",
      permission: "dashboard",
    },
    {
      label: "Procurement",
      path: "/procurement",
      permission: "procurement",
    },
    {
      label: "Vendors",
      path: "/vendors",
      permission: "vendors",
    },
    {
      label: "Risk",
      path: "/risk",
      permission: "risk",
    },
    {
      label: "Compliance",
      path: "/compliance",
      permission: "compliance",
    },
    {
      label: "Audit",
      path: "/audit",
      permission: "audit",
    },
    {
      label: "Reports",
      path: "/reports",
      permission: "reports",
    },
    {
      label: "Settings",
      path: "/settings",
      permission: "settings",
    },
  ];

  const filteredMenu = menuItems.filter(
    (item) =>
      permissions.includes(item.permission)
  );

  // Memoized navigation handler
  const handleNavigation = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <Box
      sx={{
        width: 260,
        bgcolor: "#0F172A",
        color: "#fff",
        p: 3,
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={5}
      >
        e-GRCP
      </Typography>

      {filteredMenu.map((item) => {
        const active =
          location.pathname === item.path ||
          location.pathname.startsWith(
            item.path + "/"
          );

        return (
          <Typography
            key={item.path}
            onClick={() =>
              handleNavigation(item.path)
            }
            sx={{
              mt: 2,
              cursor: "pointer",
              p: 1.5,
              borderRadius: 2,
              fontWeight: active
                ? 700
                : 400,
              bgcolor: active
                ? "#1976d2"
                : "transparent",
              transition: "0.3s",
              "&:hover": {
                bgcolor: "#1E293B",
              },
            }}
          >
            {item.label}
          </Typography>
        );
      })}
    </Box>
  );
};

export default Sidebar;
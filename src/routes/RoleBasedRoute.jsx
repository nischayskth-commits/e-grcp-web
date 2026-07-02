import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import rolePermissions from "../config/rolePermissions";

const routePermissionMap = {
  "/dashboard": "dashboard",
  "/procurement": "procurement",
  "/vendors": "vendors",
  "/risk": "risk",
  "/compliance": "compliance",
  "/audit": "audit",
  "/reports": "reports",
  "/notifications": "notifications",
  "/settings": "settings",
};

const RoleBasedRoute = () => {
  const location = useLocation();

  const { user } = useSelector(
    (state) => state.auth
  );

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const permissions =
    rolePermissions[user?.role]?.pages || [];

  const matchedRoute = Object.keys(
    routePermissionMap
  ).find((route) =>
    location.pathname.startsWith(route)
  );

  if (matchedRoute) {
    const requiredPermission =
      routePermissionMap[matchedRoute];

    if (
      !permissions.includes(
        requiredPermission
      )
    ) {
      return (
        <Navigate
          to="/unauthorized"
          replace
        />
      );
    }
  }

  return <Outlet />;
};

export default RoleBasedRoute;
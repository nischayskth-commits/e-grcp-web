import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  const { isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  if (!isAuthenticated) {
    return <Outlet />;
  }

  switch (user?.role) {
    case "Auditor":
      return <Navigate to="/audit" replace />;

    default:
      return <Navigate to="/dashboard" replace />;
  }
};

export default PublicRoute;
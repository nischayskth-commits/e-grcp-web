import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import RoleBasedRoute from "./RoleBasedRoute";

import Loader from "../components/common/Loader";

// =========================
// Lazy Loaded Pages
// =========================

// Authentication
const Login = lazy(() =>
  import("../features/auth/pages/Login")
);

const ForgotPassword = lazy(() =>
  import("../features/auth/pages/ForgotPassword")
);

const ResetPassword = lazy(() =>
  import("../features/auth/pages/ResetPassword")
);

const SessionExpired = lazy(() =>
  import("../features/auth/pages/SessionExpired")
);

// Dashboard
const Dashboard = lazy(() =>
  import("../pages/Dashboard")
);

// Procurement
const ProcurementList = lazy(() =>
  import("../features/procurement/pages/ProcurementList")
);

const ProcurementDetails = lazy(() =>
  import("../features/procurement/pages/ProcurementDetails")
);

// Vendor
const VendorDashboard = lazy(() =>
  import("../features/vendor/pages/VendorDashboard")
);

const VendorProfile = lazy(() =>
  import("../features/vendor/pages/VendorProfile")
);

// Risk
const RiskDashboard = lazy(() =>
  import("../features/risk/pages/RiskDashboard")
);

// Compliance
const ComplianceDashboard = lazy(() =>
  import("../features/compliance/pages/ComplianceDashboard")
);

const ComplianceDetails = lazy(() =>
  import("../features/compliance/pages/ComplianceDetails")
);

// Audit
const AuditDashboard = lazy(() =>
  import("../features/audit/pages/AuditDashboard")
);

const AuditDetails = lazy(() =>
  import("../features/audit/pages/AuditDetails")
);

// Notification
const NotificationDashboard = lazy(() =>
  import("../features/notification/pages/NotificationDashboard")
);

// Reporting
const ReportingDashboard = lazy(() =>
  import("../features/reporting/pages/ReportingDashboard")
);

// Settings
const SettingsDashboard = lazy(() =>
  import("../features/settings/pages/SettingsDashboard")
);

// Common
const Unauthorized = lazy(() =>
  import("../pages/Unauthorized")
);

const NotFound = lazy(() =>
  import("../pages/NotFound")
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>

        {/* Default */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Public Routes */}
        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/forgot-password"
              element={<ForgotPassword />}
            />

            <Route
              path="/reset-password"
              element={<ResetPassword />}
            />

            <Route
              path="/session-expired"
              element={<SessionExpired />}
            />

          </Route>
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>

            {/* Role Based Routing */}
            <Route element={<RoleBasedRoute />}>

              {/* Dashboard */}
              <Route
                path="/dashboard"
                element={<Dashboard />}
              />

              {/* Procurement */}
              <Route
                path="/procurement"
                element={<ProcurementList />}
              />

              <Route
                path="/procurement/:id"
                element={<ProcurementDetails />}
              />

              {/* Vendors */}
              <Route
                path="/vendors"
                element={<VendorDashboard />}
              />

              <Route
                path="/vendors/:id"
                element={<VendorProfile />}
              />

              {/* Risk */}
              <Route
                path="/risk"
                element={<RiskDashboard />}
              />

              {/* Compliance */}
              <Route
                path="/compliance"
                element={<ComplianceDashboard />}
              />

              <Route
                path="/compliance/:id"
                element={<ComplianceDetails />}
              />

              {/* Audit */}
              <Route
                path="/audit"
                element={<AuditDashboard />}
              />

              <Route
                path="/audit/:id"
                element={<AuditDetails />}
              />

              {/* Notifications */}
              <Route
                path="/notifications"
                element={<NotificationDashboard />}
              />

              {/* Reports */}
              <Route
                path="/reports"
                element={<ReportingDashboard />}
              />

              {/* Settings */}
              <Route
                path="/settings"
                element={<SettingsDashboard />}
              />

            </Route>

          </Route>
        </Route>

        {/* Unauthorized */}
        <Route
          path="/unauthorized"
          element={<Unauthorized />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
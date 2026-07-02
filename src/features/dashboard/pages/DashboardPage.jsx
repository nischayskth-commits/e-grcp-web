import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Typography } from "@mui/material";

import Loader from "../../../components/common/Loader";

import DashboardHeader from "../components/DashboardHeader";
import KPICard from "../components/KPICard";
import ProcurementChart from "../components/ProcurementChart";
import RiskChart from "../components/RiskChart";
import ComplianceChart from "../components/ComplianceChart";
import DepartmentChart from "../components/DepartmentChart";
import ActivityTimeline from "../components/ActivityTimeline";

import InventoryIcon from "@mui/icons-material/Inventory";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import BusinessIcon from "@mui/icons-material/Business";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import GppGoodIcon from "@mui/icons-material/GppGood";

import { fetchDashboardData } from "../redux/dashboardSlice";

const DashboardPage = () => {
  const dispatch = useDispatch();

  const { dashboardData, loading, error } = useSelector(
    (state) => state.dashboard
  );

  const kpis = dashboardData?.kpis;

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box sx={{ p: 2 }}>
      {/* Dashboard Header */}
      <DashboardHeader />

      {/* KPI Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
        }}
      >
        <KPICard
          title="Total Requests"
          value={kpis?.totalRequests ?? 0}
          icon={<InventoryIcon color="primary" />}
          color="#1976d2"
        />

        <KPICard
          title="Pending Requests"
          value={kpis?.pendingRequests ?? 0}
          icon={<PendingActionsIcon color="warning" />}
          color="#ed6c02"
        />

        <KPICard
          title="Approved Requests"
          value={kpis?.approvedRequests ?? 0}
          icon={<CheckCircleIcon color="success" />}
          color="#2e7d32"
        />

        <KPICard
          title="Rejected Requests"
          value={kpis?.rejectedRequests ?? 0}
          icon={<CancelIcon color="error" />}
          color="#d32f2f"
        />

        <KPICard
          title="Vendors"
          value={kpis?.vendors ?? 0}
          icon={<BusinessIcon color="primary" />}
          color="#0288d1"
        />

        <KPICard
          title="Risks"
          value={kpis?.risks ?? 0}
          icon={<WarningAmberIcon color="warning" />}
          color="#f57c00"
        />

        <KPICard
          title="Compliance Issues"
          value={kpis?.complianceIssues ?? 0}
          icon={<GppGoodIcon color="success" />}
          color="#388e3c"
        />
      </Box>

      {/* Charts - Row 1 */}
      <Box
        sx={{
          mt: 5,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "1fr 1fr",
          },
          gap: 3,
        }}
      >
        <ProcurementChart
          data={dashboardData?.monthlyProcurement || []}
        />

        <RiskChart
          data={dashboardData?.riskTrend || []}
        />
      </Box>

      {/* Charts - Row 2 */}
      <Box
        sx={{
          mt: 4,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "1fr 1fr",
          },
          gap: 3,
        }}
      >
        <ComplianceChart
          data={dashboardData?.complianceTrend || []}
        />

        <DepartmentChart
          data={dashboardData?.departmentSpending || []}
        />
      </Box>

      {/* Activity Timeline */}
      <Box sx={{ mt: 4 }}>
        <ActivityTimeline
          data={dashboardData?.recentActivities || []}
        />
      </Box>
    </Box>
  );
};

export default DashboardPage;
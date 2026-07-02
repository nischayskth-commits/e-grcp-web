import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Typography,
  Grid,
} from "@mui/material";

import {
  WarningAmber,
  CheckCircle,
  LockOpen,
  TrendingUp,
} from "@mui/icons-material";

import Loader from "../../../components/common/Loader";

import { fetchRisks } from "../redux/riskSlice";

import RiskKPICard from "../components/RiskKPICard";
import RiskMatrix from "../components/RiskMatrix";
import RiskTrendChart from "../components/RiskTrendChart";
import RiskDistributionChart from "../components/RiskDistributionChart";
import RiskBarChart from "../components/RiskBarChart";

const RiskDashboard = () => {
  const dispatch = useDispatch();

  const {
    risks,
    loading,
    error,
  } = useSelector(
    (state) => state.risk
  );

  useEffect(() => {
    dispatch(fetchRisks());
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error) {
    return (
      <Typography color="error">
        {error}
      </Typography>
    );
  }

  const totalRisks = risks.length;

  const openRisks = risks.filter(
    (risk) => risk.status === "Open"
  ).length;

  const approvedRisks = risks.filter(
    (risk) => risk.status === "Approved"
  ).length;

  const highRisks = risks.filter(
    (risk) => risk.score >= 15
  ).length;

  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Risk Center
      </Typography>

      {/* KPI Cards */}

      <Grid
        container
        spacing={3}
        mb={4}
      >

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <RiskKPICard
            title="Total Risks"
            value={totalRisks}
            icon={<WarningAmber color="error" />}
            color="#d32f2f"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <RiskKPICard
            title="Open Risks"
            value={openRisks}
            icon={<LockOpen color="warning" />}
            color="#ed6c02"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <RiskKPICard
            title="Approved Risks"
            value={approvedRisks}
            icon={<CheckCircle color="success" />}
            color="#2e7d32"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <RiskKPICard
            title="High Risks"
            value={highRisks}
            icon={<TrendingUp color="error" />}
            color="#c62828"
          />
        </Grid>

      </Grid>

      {/* Risk Matrix */}

      <RiskMatrix
        risks={risks}
      />

      {/* Charts */}

      <Grid
        container
        spacing={3}
        mt={2}
      >

        <Grid size={{ xs: 12, md: 6 }}>
          <RiskTrendChart
            risks={risks}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <RiskDistributionChart
            risks={risks}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <RiskBarChart
            risks={risks}
          />
        </Grid>

      </Grid>

    </Box>
  );
};

export default RiskDashboard;
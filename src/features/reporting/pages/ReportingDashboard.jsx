import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Grid,
  Typography,
  Button,
} from "@mui/material";

import {
  Assessment,
  Save,
  Download,
  ArrowBack,
} from "@mui/icons-material";

import Loader from "../../../components/common/Loader";

import {
  fetchReports,
} from "../redux/reportingSlice";

import ReportKPICard from "../components/ReportKPICard";
import ReportFilters from "../components/ReportFilters";
import ReportsTable from "../components/ReportsTable";
import SavedReports from "../components/SavedReports";

const ReportingDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    reports,
    loading,
    error,
  } = useSelector(
    (state) => state.reporting
  );

  // 👇 Get logged-in user
  const { user } = useSelector(
    (state) => state.auth
  );

  const [filter, setFilter] =
    useState("All");

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error) {
    return (
      <Typography color="error">
        {error}
      </Typography>
    );
  }

  const filteredReports =
    filter === "All"
      ? reports
      : reports.filter(
          (report) =>
            report.category === filter
        );

  const total =
    reports.length;

  const saved =
    reports.filter(
      (report) =>
        report.status === "Saved"
    ).length;

  const exported =
    reports.filter(
      (report) =>
        report.status ===
        "Generated"
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
            Reporting Center
          </Typography>

          <Typography
            color="text.secondary"
          >
            Generate, filter and export reports.
          </Typography>

        </Box>

        {/* Hide Back button for Auditor */}
        {user?.role !== "Auditor" && (
          <Button
            variant="outlined"
            startIcon={<ArrowBack />}
            onClick={() =>
              navigate("/dashboard")
            }
          >
            Back to Dashboard
          </Button>
        )}

      </Box>

      <Grid
        container
        spacing={3}
        my={3}
      >

        <Grid size={{ xs: 12, md: 4 }}>
          <ReportKPICard
            title="Total Reports"
            value={total}
            icon={<Assessment />}
            color="#1976d2"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ReportKPICard
            title="Saved Reports"
            value={saved}
            icon={<Save />}
            color="#2e7d32"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ReportKPICard
            title="Exported Reports"
            value={exported}
            icon={<Download />}
            color="#ed6c02"
          />
        </Grid>

      </Grid>

      <ReportFilters
        filter={filter}
        setFilter={setFilter}
      />

      <ReportsTable
        reports={filteredReports}
      />

      <Box mt={3}>

        <SavedReports
          reports={reports}
        />

      </Box>

    </Box>
  );
};

export default ReportingDashboard;
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";

import {
  Assignment,
  CheckCircle,
  PendingActions,
  Description,
} from "@mui/icons-material";

import Loader from "../../../components/common/Loader";

import { fetchAudits } from "../redux/auditSlice";

import AuditKPICard from "../components/AuditKPICard";
import ActivityFeed from "../components/ActivityFeed";
import AuditTimeline from "../components/AuditTimeline";
import AuditReports from "../components/AuditReports";
import SystemLogs from "../components/SystemLogs";

const AuditDashboard = () => {

  const dispatch = useDispatch();

  const {
    audits,
    loading,
    error,
  } = useSelector(
    (state) => state.audit
  );

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("All");

  useEffect(() => {
    dispatch(fetchAudits());
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error) {
    return (
      <Typography color="error">
        {error}
      </Typography>
    );
  }

  const filtered = audits.filter(
    (audit) => {

      const searchMatch =
        audit.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        audit.auditor
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const statusMatch =
        status === "All"
          ? true
          : audit.status === status;

      return (
        searchMatch &&
        statusMatch
      );

    }
  );

  const total =
    audits.length;

  const completed =
    audits.filter(
      (a) =>
        a.status ===
        "Completed"
    ).length;

  const pending =
    audits.filter(
      (a) =>
        a.status ===
        "Pending"
    ).length;

  const reports =
    audits.length;

  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Audit Center
      </Typography>

      {/* KPI Cards */}

      <Grid
        container
        spacing={3}
        mb={4}
      >

        <Grid
          size={{
            xs: 12,
            md: 3,
          }}
        >
          <AuditKPICard
            title="Total Audits"
            value={total}
            icon={
              <Assignment />
            }
            color="#1976d2"
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 3,
          }}
        >
          <AuditKPICard
            title="Completed"
            value={completed}
            icon={
              <CheckCircle />
            }
            color="#2e7d32"
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 3,
          }}
        >
          <AuditKPICard
            title="Pending"
            value={pending}
            icon={
              <PendingActions />
            }
            color="#ed6c02"
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 3,
          }}
        >
          <AuditKPICard
            title="Reports"
            value={reports}
            icon={
              <Description />
            }
            color="#7b1fa2"
          />
        </Grid>

      </Grid>

      {/* Search */}

      <Grid
        container
        spacing={2}
        mb={4}
      >

        <Grid
          size={{
            xs: 12,
            md: 8,
          }}
        >

          <TextField
            fullWidth
            label="Search Audits..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >

          <TextField
            select
            fullWidth
            label="Status"
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value
              )
            }
          >

            <MenuItem value="All">
              All
            </MenuItem>

            <MenuItem value="Completed">
              Completed
            </MenuItem>

            <MenuItem value="Pending">
              Pending
            </MenuItem>

            <MenuItem value="In Progress">
              In Progress
            </MenuItem>

          </TextField>

        </Grid>

      </Grid>

      {/* Activity Feed */}

      <ActivityFeed
        audits={filtered}
      />

      <Grid
        container
        spacing={3}
        mt={3}
      >

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <AuditTimeline
            audits={filtered}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <AuditReports
            audits={filtered}
          />
        </Grid>

      </Grid>

      <Box mt={3}>

        <SystemLogs
          audits={filtered}
        />

      </Box>

    </Box>
  );
};

export default AuditDashboard;
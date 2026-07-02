import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Grid,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";

import {
  AssignmentTurnedIn,
  WarningAmber,
  Description,
  EventBusy,
} from "@mui/icons-material";

import Loader from "../../../components/common/Loader";

import {
  fetchCompliances,
} from "../redux/complianceSlice";

import ComplianceKPICard from "../components/ComplianceKPICard";
import ComplianceViolations from "../components/ComplianceViolations";
import MissingDocuments from "../components/MissingDocuments";
import ExpiredCertifications from "../components/ExpiredCertifications";
import ComplianceTable from "../components/ComplianceTable";

const ComplianceDashboard = () => {

  const dispatch = useDispatch();

  const {
    compliances,
    loading,
    error,
  } = useSelector(
    (state) => state.compliance
  );

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("All");

  useEffect(() => {
    dispatch(fetchCompliances());
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error) {
    return (
      <Typography color="error">
        {error}
      </Typography>
    );
  }

  const filtered =
    compliances.filter((item) => {

      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.owner
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "All"
          ? true
          : item.status === status;

      return (
        matchesSearch &&
        matchesStatus
      );

    });

  const total =
    compliances.length;

  const violations =
    compliances.filter(
      (c) =>
        c.status === "Violation"
    ).length;

  const missingDocs =
    compliances.filter(
      (c) =>
        c.documentStatus ===
        "Missing"
    ).length;

  const expired =
    compliances.filter(
      (c) =>
        new Date(
          c.certificationExpiry
        ) < new Date()
    ).length;

  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Compliance Center
      </Typography>

      <Grid
        container
        spacing={3}
        mb={4}
      >

        <Grid size={{ xs:12, sm:6, md:3 }}>
          <ComplianceKPICard
            title="Total Compliance"
            value={total}
            icon={<AssignmentTurnedIn />}
            color="#1976d2"
          />
        </Grid>

        <Grid size={{ xs:12, sm:6, md:3 }}>
          <ComplianceKPICard
            title="Violations"
            value={violations}
            icon={<WarningAmber />}
            color="#d32f2f"
          />
        </Grid>

        <Grid size={{ xs:12, sm:6, md:3 }}>
          <ComplianceKPICard
            title="Missing Documents"
            value={missingDocs}
            icon={<Description />}
            color="#ed6c02"
          />
        </Grid>

        <Grid size={{ xs:12, sm:6, md:3 }}>
          <ComplianceKPICard
            title="Expired Certifications"
            value={expired}
            icon={<EventBusy />}
            color="#7b1fa2"
          />
        </Grid>

      </Grid>

      <Grid
        container
        spacing={2}
        mb={3}
      >

        <Grid size={{ xs:12, md:8 }}>

          <TextField
            fullWidth
            label="Search Compliance..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </Grid>

        <Grid size={{ xs:12, md:4 }}>

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

            <MenuItem value="Compliant">
              Compliant
            </MenuItem>

            <MenuItem value="Violation">
              Violation
            </MenuItem>

            <MenuItem value="Pending">
              Pending
            </MenuItem>

          </TextField>

        </Grid>

      </Grid>

      <ComplianceTable
        compliances={filtered}
      />

      <Grid
        container
        spacing={3}
        mt={2}
      >

        <Grid size={{ xs:12, md:4 }}>
          <ComplianceViolations
            compliances={compliances}
          />
        </Grid>

        <Grid size={{ xs:12, md:4 }}>
          <MissingDocuments
            compliances={compliances}
          />
        </Grid>

        <Grid size={{ xs:12, md:4 }}>
          <ExpiredCertifications
            compliances={compliances}
          />
        </Grid>

      </Grid>

    </Box>
  );
};

export default ComplianceDashboard;
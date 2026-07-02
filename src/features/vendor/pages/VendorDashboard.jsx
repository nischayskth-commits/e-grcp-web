import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

import {
  Business,
  WarningAmber,
} from "@mui/icons-material";

import Loader from "../../../components/common/Loader";

import VendorKPICard from "../components/VendorKPICard";
import VendorToolbar from "../components/VendorToolbar";
import VendorTable from "../components/VendorTable";

import {
  fetchVendors,
} from "../redux/vendorSlice";

const VendorDashboard = () => {

  const dispatch = useDispatch();

  const {
    vendors,
    loading,
    error,
  } = useSelector(
    (state) => state.vendor
  );

  const [search, setSearch] =
    useState("");

  const [risk, setRisk] =
    useState("");

  const [snackbar, setSnackbar] =
    useState({
      open: false,
      message: "",
      severity: "success",
    });

  useEffect(() => {
    dispatch(fetchVendors());
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error) {
    return (
      <Typography color="error">
        {error}
      </Typography>
    );
  }

  // ==========================
  // KPI
  // ==========================

  const totalVendors =
    vendors.length;

  const highRisk =
    vendors.filter(
      (v) => v.risk === "High"
    ).length;

  // ==========================
  // Filtering
  // ==========================

  const filtered = vendors.filter(
    (vendor) => {

      const searchMatch =
        vendor.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        vendor.id
          .toLowerCase()
          .includes(search.toLowerCase());

      const riskMatch =
        !risk ||
        vendor.risk === risk;

      return (
        searchMatch &&
        riskMatch
      );

    }
  );

  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Vendor Dashboard
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
          },
          gap: 3,
          mb: 4,
        }}
      >

        <VendorKPICard
          title="Total Vendors"
          value={totalVendors}
          icon={
            <Business color="primary" />
          }
          color="#1976d2"
        />

        <VendorKPICard
          title="High Risk Vendors"
          value={highRisk}
          icon={
            <WarningAmber color="error" />
          }
          color="#d32f2f"
        />

      </Box>

      <VendorToolbar
        search={search}
        setSearch={setSearch}
        risk={risk}
        setRisk={setRisk}
      />

      <VendorTable
        vendors={filtered}
      />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() =>
          setSnackbar({
            ...snackbar,
            open: false,
          })
        }
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          onClose={() =>
            setSnackbar({
              ...snackbar,
              open: false,
            })
          }
        >
          {snackbar.message}
        </Alert>
      </Snackbar>

    </Box>
  );
};

export default VendorDashboard;
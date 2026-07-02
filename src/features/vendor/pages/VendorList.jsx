import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Typography,
} from "@mui/material";

import Loader from "../../../components/common/Loader";

import VendorToolbar from "../components/VendorToolbar";
import VendorTable from "../components/VendorTable";

import { fetchVendors } from "../redux/vendorSlice";

const VendorList = () => {
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

  const [status, setStatus] =
    useState("");

  const [risk, setRisk] =
    useState("");

  useEffect(() => {
    dispatch(fetchVendors());
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error)
    return (
      <Typography color="error">
        {error}
      </Typography>
    );

  const filtered = vendors.filter(
    (vendor) => {
      const searchMatch =
        vendor.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        vendor.id
          .toLowerCase()
          .includes(search.toLowerCase());

      const statusMatch =
        !status ||
        vendor.status === status;

      const riskMatch =
        !risk ||
        vendor.risk === risk;

      return (
        searchMatch &&
        statusMatch &&
        riskMatch
      );
    }
  );

  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Vendor List
      </Typography>

      <VendorToolbar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        risk={risk}
        setRisk={setRisk}
        onAddVendor={() =>
          alert("Create Vendor - Coming Soon")
        }
      />

      <VendorTable
        vendors={filtered}
      />

    </Box>
  );
};

export default VendorList;
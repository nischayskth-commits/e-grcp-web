import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Typography,
} from "@mui/material";

import Loader from "../../../components/common/Loader";

import ProcurementToolbar from "../components/ProcurementToolbar";
import ProcurementTable from "../components/ProcurementTable";

import { fetchProcurements } from "../redux/procurementSlice";

const ProcurementList = () => {
  const dispatch = useDispatch();

  const {
    procurements,
    loading,
    error,
  } = useSelector(
    (state) => state.procurement
  );

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [department, setDepartment] =
    useState("");

  useEffect(() => {
    dispatch(fetchProcurements());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Typography color="error">
        {error}
      </Typography>
    );
  }

  const filtered = procurements.filter(
    (item) => {
      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.id
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.vendor
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "" ||
        item.status === status;

      const matchesDepartment =
        department === "" ||
        item.department ===
          department;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesDepartment
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
        Procurement Workspace
      </Typography>

      <ProcurementToolbar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        department={department}
        setDepartment={setDepartment}
        data={filtered}
      />

      <ProcurementTable
        procurements={filtered}
      />
    </Box>
  );
};

export default ProcurementList;
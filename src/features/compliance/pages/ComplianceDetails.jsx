import { useEffect } from "react";
import {
  useParams,
} from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  Box,
  Typography,
} from "@mui/material";

import {
  fetchCompliances,
} from "../redux/complianceSlice";

import ComplianceBreadcrumbs from "../components/ComplianceBreadcrumbs";
import ComplianceHeader from "../components/ComplianceHeader";
import ComplianceOverview from "../components/ComplianceOverview";

const ComplianceDetails = () => {

  const dispatch =
    useDispatch();

  const { id } =
    useParams();

  const {
    compliances,
    loading,
  } = useSelector(
    (state) =>
      state.compliance
  );

  useEffect(() => {

    if (
      compliances.length === 0
    ) {
      dispatch(
        fetchCompliances()
      );
    }

  }, [
    dispatch,
    compliances.length,
  ]);

  if (loading) {
    return (
      <Typography>
        Loading...
      </Typography>
    );
  }

  const compliance =
    compliances.find(
      (item) =>
        item.id === id
    );

  if (!compliance) {
    return (
      <Typography variant="h5">
        Compliance not found.
      </Typography>
    );
  }

  return (
    <Box>

      <ComplianceBreadcrumbs
        id={compliance.id}
      />

      <ComplianceHeader
        compliance={compliance}
      />

      <ComplianceOverview
        compliance={compliance}
      />

    </Box>
  );
};

export default ComplianceDetails;
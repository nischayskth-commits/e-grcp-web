import { useState } from "react";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import { addProcurement } from "../../procurement/redux/procurementSlice";

import NewProcurementDialog from "../../procurement/components/NewProcurementDialog";

const DashboardHeader = () => {

  const dispatch = useDispatch();

  const { user } = useSelector(
    (state) => state.auth
  );

  const [openDialog, setOpenDialog] =
    useState(false);

  const today = new Date().toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const handleSave = (
    procurement
  ) => {

    dispatch(
      addProcurement(procurement)
    );

    setOpenDialog(false);

  };

  return (

    <>

      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >

        <Box>

          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Welcome,{" "}
            {user?.firstName}
          </Typography>

          <Typography
            color="text.secondary"
          >
            {user?.role}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mt={1}
          >
            {today}
          </Typography>

        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            setOpenDialog(true)
          }
        >
          New Request
        </Button>

      </Box>

      <NewProcurementDialog
        open={openDialog}
        onClose={() =>
          setOpenDialog(false)
        }
        onSave={handleSave}
      />

    </>

  );

};

export default DashboardHeader;
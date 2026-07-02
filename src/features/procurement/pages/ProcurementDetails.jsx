import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Card,
  CardContent,
  Tabs,
  Tab,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  approveProcurement,
  rejectProcurement,
  updateProcurement,
  fetchProcurements,
} from "../redux/procurementSlice";

import BreadcrumbsBar from "../components/BreadcrumbsBar";
import ProcurementHeader from "../components/ProcurementHeader";
import ProcurementOverview from "../components/ProcurementOverview";
import AttachmentList from "../components/AttachmentList";
import ApprovalTimeline from "../components/ApprovalTimeline";
import CommentsPanel from "../components/CommentsPanel";
import AuditTimeline from "../components/AuditTimeline";

import ApproveDialog from "../components/ApproveDialog";
import RejectDialog from "../components/RejectDialog";
import EditProcurementDialog from "../components/EditProcurementDialog";
import SendBackDialog from "../components/SendBackDialog";
import DelegateDialog from "../components/DelegateDialog";

const ProcurementDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { procurements } = useSelector(
    (state) => state.procurement
  );

  const procurement = procurements.find(
    (item) => item.id === id
  );

  useEffect(() => {
    if (procurements.length === 0) {
      dispatch(fetchProcurements());
    }
  }, [dispatch, procurements.length]);

  const [tab, setTab] = useState(0);
  const [approveOpen, setApproveOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [sendBackOpen, setSendBackOpen] = useState(false);
  const [delegateOpen, setDelegateOpen] = useState(false);
  
  // STEP 1: Added form state tracking
  const [form, setForm] = useState({});

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  if (procurements.length === 0) {
    return (
      <Typography variant="h5">
        Loading Procurement...
      </Typography>
    );
  }

  if (!procurement) {
    return (
      <Typography variant="h5">
        Procurement not found.
      </Typography>
    );
  }

  const showMessage = (
    message,
    severity = "success"
  ) => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };

  const handleApprove = () => {
    dispatch(approveProcurement(procurement.id));
    setApproveOpen(false);
    showMessage("Procurement approved successfully.");
  };

  const handleReject = (reason) => {
    dispatch(
      rejectProcurement({
        id: procurement.id,
        reason,
      })
    );
    setRejectOpen(false);
    showMessage("Procurement rejected.");
  };

  const handleSendBack = (reason) => {
    dispatch(
      updateProcurement({
        ...procurement,
        status: "Sent Back",
        sendBackReason: reason,
      })
    );
    setSendBackOpen(false);
    showMessage("Procurement sent back successfully.");
  };

  const handleDelegate = (user) => {
    dispatch(
      updateProcurement({
        ...procurement,
        status: "Delegated",
        delegatedTo: user,
      })
    );
    setDelegateOpen(false);
    showMessage(`Delegated to ${user}`);
  };

  // STEP 3: Added openEdit and handleFormChange handlers
  const openEdit = () => {
    setForm(procurement);
    setEditOpen(true);
  };

  const handleFormChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // STEP 2: Replaced handleSave to use local form state controlled variable
  const handleSave = () => {
    dispatch(updateProcurement(form));
    setEditOpen(false);
    showMessage("Procurement updated successfully.");
  };

  return (
    <Box>
      <BreadcrumbsBar id={procurement.id} />

      {/* STEP 4: Replaced inline anonymous handler with openEdit reference */}
      <ProcurementHeader
        procurement={procurement}
        onApprove={() => setApproveOpen(true)}
        onReject={() => setRejectOpen(true)}
        onSendBack={() => setSendBackOpen(true)}
        onDelegate={() => setDelegateOpen(true)}
        onEdit={openEdit}
      />

      <Card
        elevation={3}
        sx={{
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Tabs
            value={tab}
            onChange={(e, value) => setTab(value)}
            sx={{ mb: 3 }}
          >
            <Tab label="Overview" />
            <Tab label="Attachments" />
            <Tab label="Approval History" />
            <Tab label="Comments" />
            <Tab label="Audit Logs" />
          </Tabs>

          {tab === 0 && (
            <ProcurementOverview procurement={procurement} />
          )}
          {tab === 1 && <AttachmentList />}
          {tab === 2 && <ApprovalTimeline />}
          {tab === 3 && <CommentsPanel />}
          {tab === 4 && <AuditTimeline />}
        </CardContent>
      </Card>

      <ApproveDialog
        open={approveOpen}
        onClose={() => setApproveOpen(false)}
        onApprove={handleApprove}
      />

      <RejectDialog
        open={rejectOpen}
        onClose={() => setRejectOpen(false)}
        onReject={handleReject}
      />

      <SendBackDialog
        open={sendBackOpen}
        onClose={() => setSendBackOpen(false)}
        onSubmit={handleSendBack}
      />

      <DelegateDialog
        open={delegateOpen}
        onClose={() => setDelegateOpen(false)}
        onSubmit={handleDelegate}
      />

      {/* STEP 5: Replaced props footprint to bind controlled fields to form state */}
      <EditProcurementDialog
        open={editOpen}
        form={form}
        onChange={handleFormChange}
        onClose={() => setEditOpen(false)}
        onSave={handleSave}
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
        <Alert severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProcurementDetails;
const rolePermissions = {
  Administrator: {
    pages: [
      "dashboard",
      "procurement",
      "vendors",
      "risk",
      "compliance",
      "audit",
      "reports",
      "notifications",
      "settings",
    ],
    actions: [
      "approve",
      "reject",
      "edit",
      "delegate",
      "sendBack",
    ],
  },

  "Procurement Manager": {
    pages: [
      "dashboard",
      "procurement",
      "vendors",
      "risk",
      "reports",
      "notifications",
      "settings",
    ],
    actions: [
      "approve",
      "reject",
      "edit",
      "delegate",
      "sendBack",
    ],
  },

  Employee: {
    pages: [
      "dashboard",
      "procurement",
      "notifications",
      "settings",
    ],
    actions: [],
  },

  "Compliance Officer": {
    pages: [
      "dashboard",
      "compliance",
      "reports",
      "notifications",
      "settings",
    ],
    actions: [],
  },

  Auditor: {
    pages: [
      "audit",
      "reports",
      "notifications",
      "settings",
    ],
    actions: [],
  },
};

export default rolePermissions;
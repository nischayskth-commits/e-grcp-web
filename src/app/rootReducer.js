import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../features/auth/redux/authSlice";
import dashboardReducer from "../features/dashboard/redux/dashboardSlice";
import procurementReducer from "../features/procurement/redux/procurementSlice";
import vendorReducer from "../features/vendor/redux/vendorSlice";
import riskReducer from "../features/risk/redux/riskSlice";
import complianceReducer from "../features/compliance/redux/complianceSlice";
import auditReducer from "../features/audit/redux/auditSlice";
import themeReducer from "../theme/themeSlice";
import notificationReducer from "../features/notification/redux/notificationSlice";
import reportingReducer from "../features/reporting/redux/reportingSlice";
import uiReducer from "../features/ui/redux/uiSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  procurement: procurementReducer,
  vendor: vendorReducer,
  risk: riskReducer,
  compliance: complianceReducer,
  audit: auditReducer,
  theme: themeReducer,
  notification: notificationReducer,
  reporting: reportingReducer,
  ui: uiReducer,

});

export default rootReducer;
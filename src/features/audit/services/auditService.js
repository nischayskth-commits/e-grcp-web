import auditData from "../data/audit.json";

const STORAGE_KEY = "auditData";

const getAllAudits = async () => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored) {
    return JSON.parse(stored);
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(auditData)
  );

  return auditData;
};

const saveAudits = (audits) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(audits)
  );
};

export default {
  getAllAudits,
  saveAudits,
};
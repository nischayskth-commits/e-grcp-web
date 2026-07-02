import reportData from "../../../mocks/reports.json";

const STORAGE_KEY = "reportData";

const getReports = async () => {

  const stored =
    localStorage.getItem(STORAGE_KEY);

  if (stored) {
    return JSON.parse(stored);
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(reportData)
  );

  return reportData;
};

const saveReports = (
  reports
) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(reports)
  );
};

export default {
  getReports,
  saveReports,
};
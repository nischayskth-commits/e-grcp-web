import risks from "../../../mocks/riskData.json";

const STORAGE_KEY = "egrcp_risks";

const getAllRisks = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        resolve(JSON.parse(saved));
      } else {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(risks)
        );

        resolve(risks);
      }
    }, 500);
  });
};

const saveRisks = (data) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
};

export default {
  getAllRisks,
  saveRisks,
};
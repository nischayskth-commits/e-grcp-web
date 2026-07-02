import procurements from "../../../mocks/requests.json";

const STORAGE_KEY = "procurements";

const getAllProcurements = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {

      const stored =
        localStorage.getItem(STORAGE_KEY);

      if (stored) {
        resolve(JSON.parse(stored));
      } else {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(procurements)
        );

        resolve(procurements);
      }

    }, 500);
  });
};

const saveProcurements = (data) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
};

export default {
  getAllProcurements,
  saveProcurements,
};
import vendors from "../../../mocks/vendors.json";

const STORAGE_KEY = "vendors";

const getAllVendors = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        resolve(JSON.parse(stored));
      } else {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(vendors)
        );

        resolve(vendors);
      }
    }, 500);
  });
};

const saveVendors = (data) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
};

export default {
  getAllVendors,
  saveVendors,
};
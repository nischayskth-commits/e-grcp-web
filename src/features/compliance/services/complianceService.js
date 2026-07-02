import compliances from "../../../mocks/compliances.json";

const STORAGE_KEY = "egrcp_compliances";

const getAllCompliances = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {

      const saved =
        localStorage.getItem(STORAGE_KEY);

      if (saved) {
        resolve(JSON.parse(saved));
      } else {

        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(compliances)
        );

        resolve(compliances);

      }

    }, 500);
  });
};

const saveCompliances = (
  data
) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
};

export default {
  getAllCompliances,
  saveCompliances,
};
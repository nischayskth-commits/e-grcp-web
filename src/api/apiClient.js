import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});
// Request Interceptor

apiClient.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    alert("Request could not be sent.");
    return Promise.reject(error);
  }
);


// Response Interceptor


apiClient.interceptors.response.use(
  (response) => response,

  (error) => {

    // Timeout Error
    if (error.code === "ECONNABORTED") {

      alert("Request Timeout. Please try again.");

    }

    // Network Error
    else if (!error.response) {

      alert("Network Error. Please check your internet connection.");

    }

    // HTTP Errors
    else {

      switch (error.response.status) {

        case 400:
          alert("400 - Bad Request");
          break;

        case 401:
          alert("401 - Unauthorized");

          localStorage.removeItem("accessToken");

          window.location.href = "/login";
          break;

        case 403:
          alert("403 - Forbidden");
          break;

        case 404:
          alert("404 - Resource Not Found");
          break;

        case 500:
          alert("500 - Internal Server Error");
          break;

        default:
          alert(
            `Unexpected Error (${error.response.status})`
          );

      }

    }

    return Promise.reject(error);

  }
);

export default apiClient;
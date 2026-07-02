import dashboardData from "../../../mocks/dashboard.json";
import apiClient from "../../../api/apiClient";

const dashboardService = {
  getDashboardData: async () => {
    try {
      // Test Axios configuration
      await apiClient.get("/posts");

      // Return your existing dashboard data
      return dashboardData;
    } catch (error) {
      console.error("Dashboard API Test Failed:", error);

      // Fallback to mock data
      return dashboardData;
    }
  },
};

export default dashboardService;
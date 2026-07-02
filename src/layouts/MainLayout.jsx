import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import useSessionTimeout from "../hooks/useSessionTimeout";

import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

const MainLayout = () => {
  useSessionTimeout();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
          color: "text.primary",
          transition:
            "background-color .3s ease, color .3s ease",
        }}
      >
        <Header />

        <Box
          component="main"
          sx={{
            flex: 1,
            p: 3,
            bgcolor: "background.default",
            color: "text.primary",
            overflow: "auto",
            transition:
              "background-color .3s ease, color .3s ease",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
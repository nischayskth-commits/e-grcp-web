import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: true,
  loading: false,
};

const uiSlice = createSlice({
  name: "ui",

  initialState,

  reducers: {

    toggleSidebar: (state) => {
      state.sidebarOpen =
        !state.sidebarOpen;
    },

    openSidebar: (state) => {
      state.sidebarOpen = true;
    },

    closeSidebar: (state) => {
      state.sidebarOpen = false;
    },

    startLoading: (state) => {
      state.loading = true;
    },

    stopLoading: (state) => {
      state.loading = false;
    },

  },
});

export const {
  toggleSidebar,
  openSidebar,
  closeSidebar,
  startLoading,
  stopLoading,
} = uiSlice.actions;

export default uiSlice.reducer;
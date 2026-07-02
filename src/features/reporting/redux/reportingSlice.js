import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import reportingService from "../services/reportingService";

const initialState = {
  reports: [],
  loading: false,
  error: null,
};

export const fetchReports =
  createAsyncThunk(
    "reporting/fetchReports",
    async (_, { rejectWithValue }) => {
      try {
        return await reportingService.getReports();
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

const reportingSlice = createSlice({
  name: "reporting",

  initialState,

  reducers: {},

  extraReducers: (builder) => {

    builder

      .addCase(
        fetchReports.pending,
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      .addCase(
        fetchReports.fulfilled,
        (state, action) => {
          state.loading = false;
          state.reports =
            action.payload;
        }
      )

      .addCase(
        fetchReports.rejected,
        (state, action) => {
          state.loading = false;
          state.error =
            action.payload;
        }
      );

  },
});

export default reportingSlice.reducer;
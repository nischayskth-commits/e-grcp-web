import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import auditService from "../services/auditService";

const initialState = {
  audits: [],
  loading: false,
  error: null,
};

export const fetchAudits =
  createAsyncThunk(
    "audit/fetchAudits",
    async (_, { rejectWithValue }) => {
      try {
        return await auditService.getAllAudits();
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

const auditSlice = createSlice({
  name: "audit",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(
        fetchAudits.pending,
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      .addCase(
        fetchAudits.fulfilled,
        (state, action) => {
          state.loading = false;
          state.audits = action.payload;
        }
      )

      .addCase(
        fetchAudits.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export default auditSlice.reducer;
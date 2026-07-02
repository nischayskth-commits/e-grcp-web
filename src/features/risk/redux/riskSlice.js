import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import riskService from "../services/riskService";

const initialState = {
  risks: [],
  loading: false,
  error: null,
};

export const fetchRisks =
  createAsyncThunk(
    "risk/fetchRisks",
    async (_, { rejectWithValue }) => {
      try {
        return await riskService.getAllRisks();
      } catch (error) {
        return rejectWithValue(
          error.message
        );
      }
    }
  );

const riskSlice = createSlice({
  name: "risk",

  initialState,

  reducers: {

    addRisk: (
      state,
      action
    ) => {
      state.risks.unshift(
        action.payload
      );

      riskService.saveRisks(
        state.risks
      );
    },

    updateRisk: (
      state,
      action
    ) => {
      const index =
        state.risks.findIndex(
          (item) =>
            item.id === action.payload.id
        );

      if (index !== -1) {
        state.risks[index] = {
          ...state.risks[index],
          ...action.payload,
        };

        riskService.saveRisks(
          state.risks
        );
      }
    },

    approveRisk: (
      state,
      action
    ) => {
      const risk =
        state.risks.find(
          (item) =>
            item.id === action.payload
        );

      if (risk) {
        risk.status = "Approved";

        riskService.saveRisks(
          state.risks
        );
      }
    },

    closeRisk: (
      state,
      action
    ) => {
      const risk =
        state.risks.find(
          (item) =>
            item.id === action.payload
        );

      if (risk) {
        risk.status = "Closed";

        riskService.saveRisks(
          state.risks
        );
      }
    },

  },

  extraReducers: (builder) => {
    builder

      .addCase(
        fetchRisks.pending,
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      .addCase(
        fetchRisks.fulfilled,
        (state, action) => {
          state.loading = false;
          state.risks =
            action.payload;
        }
      )

      .addCase(
        fetchRisks.rejected,
        (state, action) => {
          state.loading = false;
          state.error =
            action.payload;
        }
      );
  },
});

export const {
  addRisk,
  updateRisk,
  approveRisk,
  closeRisk,
} = riskSlice.actions;

export default riskSlice.reducer;
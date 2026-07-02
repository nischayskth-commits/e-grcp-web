import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import procurementService from "../services/procurementService";

const initialState = {
  procurements: [],
  loading: false,
  error: null,
};

// Fetch Procurements
export const fetchProcurements = createAsyncThunk(
  "procurement/fetchProcurements",
  async (_, { rejectWithValue }) => {
    try {
      return await procurementService.getAllProcurements();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const procurementSlice = createSlice({
  name: "procurement",

  initialState,

  reducers: {

    approveProcurement: (state, action) => {

      const procurement =
        state.procurements.find(
          (item) =>
            item.id === action.payload
        );

      if (procurement) {

        procurement.status =
          "Approved";

        procurementService.saveProcurements(
          state.procurements
        );

      }

    },

    rejectProcurement: (
      state,
      action
    ) => {

      const procurement =
        state.procurements.find(
          (item) =>
            item.id ===
            action.payload.id
        );

      if (procurement) {

        procurement.status =
          "Rejected";

        procurement.rejectionReason =
          action.payload.reason;

        procurementService.saveProcurements(
          state.procurements
        );

      }

    },

    updateProcurement: (
      state,
      action
    ) => {

      const index =
        state.procurements.findIndex(
          (item) =>
            item.id ===
            action.payload.id
        );

      if (index !== -1) {

        state.procurements[index] =
          {
            ...state.procurements[
              index
            ],
            ...action.payload,
          };

        procurementService.saveProcurements(
          state.procurements
        );

      }

    },

    addProcurement: (
      state,
      action
    ) => {

      state.procurements.unshift(
        action.payload
      );

      procurementService.saveProcurements(
        state.procurements
      );

    },

  },

  extraReducers: (builder) => {

    builder

      .addCase(
        fetchProcurements.pending,
        (state) => {

          state.loading = true;
          state.error = null;

        }
      )

      .addCase(
        fetchProcurements.fulfilled,
        (state, action) => {

          state.loading = false;

          state.procurements =
            action.payload || [];

        }
      )

      .addCase(
        fetchProcurements.rejected,
        (state, action) => {

          state.loading = false;

          state.error =
            action.payload;

        }
      );

  },

});

export const {

  approveProcurement,

  rejectProcurement,

  updateProcurement,

  addProcurement,

} = procurementSlice.actions;

export default procurementSlice.reducer;
import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import complianceService from "../services/complianceService";

const initialState = {
  compliances: [],
  loading: false,
  error: null,
};

export const fetchCompliances =
  createAsyncThunk(
    "compliance/fetchCompliances",
    async (_, { rejectWithValue }) => {
      try {
        return await complianceService.getAllCompliances();
      } catch (error) {
        return rejectWithValue(
          error.message
        );
      }
    }
  );

const complianceSlice = createSlice({
  name: "compliance",

  initialState,

  reducers: {

    addCompliance: (
      state,
      action
    ) => {
      state.compliances.unshift(
        action.payload
      );

      complianceService.saveCompliances(
        state.compliances
      );
    },

    updateCompliance: (
      state,
      action
    ) => {
      const index =
        state.compliances.findIndex(
          (item) =>
            item.id === action.payload.id
        );

      if (index !== -1) {
        state.compliances[index] = {
          ...state.compliances[index],
          ...action.payload,
        };

        complianceService.saveCompliances(
          state.compliances
        );
      }
    },

    approveCompliance: (
      state,
      action
    ) => {
      const compliance =
        state.compliances.find(
          (item) =>
            item.id === action.payload
        );

      if (compliance) {
        compliance.status =
          "Compliant";

        complianceService.saveCompliances(
          state.compliances
        );
      }
    },

    rejectCompliance: (
      state,
      action
    ) => {
      const compliance =
        state.compliances.find(
          (item) =>
            item.id === action.payload
        );

      if (compliance) {
        compliance.status =
          "Violation";

        complianceService.saveCompliances(
          state.compliances
        );
      }
    },

    deleteCompliance: (
      state,
      action
    ) => {

      state.compliances =
        state.compliances.filter(
          (item) =>
            item.id !== action.payload
        );

      complianceService.saveCompliances(
        state.compliances
      );

    },

  },

  extraReducers: (builder) => {

    builder

      .addCase(
        fetchCompliances.pending,
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      .addCase(
        fetchCompliances.fulfilled,
        (state, action) => {
          state.loading = false;
          state.compliances =
            action.payload;
        }
      )

      .addCase(
        fetchCompliances.rejected,
        (state, action) => {
          state.loading = false;
          state.error =
            action.payload;
        }
      );

  },

});

export const {
  addCompliance,
  updateCompliance,
  approveCompliance,
  rejectCompliance,
  deleteCompliance,
} = complianceSlice.actions;

export default complianceSlice.reducer;
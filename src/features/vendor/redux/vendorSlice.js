import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import vendorService from "../services/vendorService";

const initialState = {
  vendors: [],
  loading: false,
  error: null,
};

export const fetchVendors =
  createAsyncThunk(
    "vendor/fetchVendors",
    async (_, { rejectWithValue }) => {
      try {
        return await vendorService.getAllVendors();
      } catch (error) {
        return rejectWithValue(
          error.message
        );
      }
    }
  );

const vendorSlice = createSlice({
  name: "vendor",

  initialState,

  reducers: {

    addVendor: (
      state,
      action
    ) => {
      state.vendors.unshift(
        action.payload
      );

      vendorService.saveVendors(
        state.vendors
      );
    },

    approveVendor: (
      state,
      action
    ) => {
      const vendor =
        state.vendors.find(
          (item) =>
            item.id === action.payload
        );

      if (vendor) {
        vendor.status = "Approved";

        vendorService.saveVendors(
          state.vendors
        );
      }
    },

    rejectVendor: (
      state,
      action
    ) => {
      const vendor =
        state.vendors.find(
          (item) =>
            item.id === action.payload
        );

      if (vendor) {
        vendor.status = "Rejected";

        vendorService.saveVendors(
          state.vendors
        );
      }
    },

    updateVendor: (
      state,
      action
    ) => {
      const index =
        state.vendors.findIndex(
          (item) =>
            item.id === action.payload.id
        );

      if (index !== -1) {
        state.vendors[index] = {
          ...state.vendors[index],
          ...action.payload,
        };

        vendorService.saveVendors(
          state.vendors
        );
      }
    },

  },

  extraReducers: (builder) => {
    builder

      .addCase(
        fetchVendors.pending,
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      .addCase(
        fetchVendors.fulfilled,
        (state, action) => {
          state.loading = false;
          state.vendors =
            action.payload;
        }
      )

      .addCase(
        fetchVendors.rejected,
        (state, action) => {
          state.loading = false;
          state.error =
            action.payload;
        }
      );
  },
});

export const {
  addVendor,
  approveVendor,
  rejectVendor,
  updateVendor,
} = vendorSlice.actions;

export default vendorSlice.reducer;
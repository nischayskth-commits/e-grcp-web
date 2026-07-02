import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import notificationService from "../services/notificationService";

const initialState = {
  notifications: [],
  loading: false,
  error: null,
};

export const fetchNotifications =
  createAsyncThunk(
    "notification/fetchNotifications",
    async (_, { rejectWithValue }) => {
      try {
        return await notificationService.getNotifications();
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

const notificationSlice = createSlice({
  name: "notification",

  initialState,

  reducers: {

    markAsRead: (state, action) => {
      const notification =
        state.notifications.find(
          (item) =>
            item.id === action.payload
        );

      if (
        notification &&
        notification.status ===
          "Unread"
      ) {
        notification.status =
          "Read";

        notificationService.saveNotifications(
          state.notifications
        );
      }
    },

    markAsUnread: (
      state,
      action
    ) => {
      const notification =
        state.notifications.find(
          (item) =>
            item.id === action.payload
        );

      if (
        notification &&
        notification.status ===
          "Read"
      ) {
        notification.status =
          "Unread";

        notificationService.saveNotifications(
          state.notifications
        );
      }
    },

  },

  extraReducers: (builder) => {
    builder

      .addCase(
        fetchNotifications.pending,
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      .addCase(
        fetchNotifications.fulfilled,
        (state, action) => {
          state.loading = false;
          state.notifications =
            action.payload;
        }
      )

      .addCase(
        fetchNotifications.rejected,
        (state, action) => {
          state.loading = false;
          state.error =
            action.payload;
        }
      );
  },
});

export const {
  markAsRead,
  markAsUnread,
} = notificationSlice.actions;

export default notificationSlice.reducer;
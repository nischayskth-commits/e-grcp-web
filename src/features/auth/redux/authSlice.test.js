import reducer, {
  logout,
  clearError,
  clearSuccess,
  loginUser,
  forgotPassword,
  resetPassword,
} from "./authSlice";

describe("authSlice", () => {
  const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    success: null,
  };

  test("should return initial state", () => {
    expect(
      reducer(undefined, { type: undefined })
    ).toEqual(initialState);
  });

  test("should logout user", () => {
    const state = {
      user: { email: "admin@test.com" },
      token: "token123",
      isAuthenticated: true,
      loading: false,
      error: "Some Error",
      success: "Success",
    };

    const newState = reducer(state, logout());

    expect(newState.user).toBeNull();
    expect(newState.token).toBeNull();
    expect(newState.isAuthenticated).toBe(false);
    expect(newState.error).toBeNull();
    expect(newState.success).toBeNull();
  });

  test("should clear error", () => {
    const state = {
      ...initialState,
      error: "Login failed",
    };

    const newState = reducer(
      state,
      clearError()
    );

    expect(newState.error).toBeNull();
  });

  test("should clear success", () => {
    const state = {
      ...initialState,
      success: "Done",
    };

    const newState = reducer(
      state,
      clearSuccess()
    );

    expect(newState.success).toBeNull();
  });

  test("login pending", () => {
    const state = reducer(
      initialState,
      {
        type: loginUser.pending.type,
      }
    );

    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  test("login fulfilled", () => {
    const state = reducer(
      initialState,
      {
        type: loginUser.fulfilled.type,
        payload: {
          token: "abc123",
          user: {
            email: "admin@test.com",
            role: "Administrator",
          },
        },
      }
    );

    expect(state.loading).toBe(false);
    expect(state.isAuthenticated).toBe(true);
    expect(state.token).toBe("abc123");
    expect(state.user.email).toBe(
      "admin@test.com"
    );
  });

  test("login rejected", () => {
    const state = reducer(
      initialState,
      {
        type: loginUser.rejected.type,
        payload: "Invalid credentials",
      }
    );

    expect(state.loading).toBe(false);
    expect(state.error).toBe(
      "Invalid credentials"
    );
  });

  test("forgot password pending", () => {
    const state = reducer(
      initialState,
      {
        type:
          forgotPassword.pending.type,
      }
    );

    expect(state.loading).toBe(true);
  });

  test("forgot password fulfilled", () => {
    const state = reducer(
      initialState,
      {
        type:
          forgotPassword.fulfilled.type,
        payload: {
          message:
            "Password reset link sent successfully.",
        },
      }
    );

    expect(state.loading).toBe(false);
    expect(state.success).toBe(
      "Password reset link sent successfully."
    );
  });

  test("forgot password rejected", () => {
    const state = reducer(
      initialState,
      {
        type:
          forgotPassword.rejected.type,
        payload: "Email not found",
      }
    );

    expect(state.loading).toBe(false);
    expect(state.error).toBe(
      "Email not found"
    );
  });

  test("reset password pending", () => {
    const state = reducer(
      initialState,
      {
        type:
          resetPassword.pending.type,
      }
    );

    expect(state.loading).toBe(true);
  });

  test("reset password fulfilled", () => {
    const state = reducer(
      initialState,
      {
        type:
          resetPassword.fulfilled.type,
        payload: {
          message:
            "Password updated successfully.",
        },
      }
    );

    expect(state.loading).toBe(false);
    expect(state.success).toBe(
      "Password updated successfully."
    );
  });

  test("reset password rejected", () => {
    const state = reducer(
      initialState,
      {
        type:
          resetPassword.rejected.type,
        payload: "Reset failed",
      }
    );

    expect(state.loading).toBe(false);
    expect(state.error).toBe(
      "Reset failed"
    );
  });
});
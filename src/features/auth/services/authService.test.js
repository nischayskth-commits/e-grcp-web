import authService from "./authService";

describe("authService", () => {
  test("login succeeds for valid user", async () => {
    const result = await authService.login({
      email: "admin@egrcp.com",
      password: "Admin@123",
    });

    expect(result.user.email).toBe(
      "admin@egrcp.com"
    );

    expect(result.user.role).toBe(
      "Administrator"
    );

    expect(result.token).toContain(
      "egrcp-token"
    );
  });

  test("login fails for invalid user", async () => {
    await expect(
      authService.login({
        email: "wrong@test.com",
        password: "wrong",
      })
    ).rejects.toThrow(
      "Invalid email or password"
    );
  });

  test("forgot password succeeds", async () => {
    const result =
      await authService.forgotPassword(
        "admin@egrcp.com"
      );

    expect(result.message).toBe(
      "Password reset link sent successfully."
    );
  });

  test("forgot password fails", async () => {
    await expect(
      authService.forgotPassword(
        "xyz@test.com"
      )
    ).rejects.toThrow(
      "Email not found"
    );
  });

  test("reset password returns success", async () => {
    const result =
      await authService.resetPassword();

    expect(result.message).toBe(
      "Password updated successfully."
    );
  });

  test("logout returns true", async () => {
    const result =
      await authService.logout();

    expect(result).toBe(true);
  });
});
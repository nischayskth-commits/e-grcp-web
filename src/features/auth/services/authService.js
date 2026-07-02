import users from "../../../mocks/users.json";

const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

const authService = {
  login: async ({ email, password }) => {
    await delay(1000);

    const user = users.find(
      (u) =>
        u.email.toLowerCase() ===
          email.toLowerCase() &&
        u.password === password &&
        u.status === "ACTIVE"
    );

    if (!user) {
      throw new Error(
        "Invalid email or password"
      );
    }

    return {
      token: `egrcp-token-${Date.now()}`,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        department: user.department,
      },
    };
  },

  forgotPassword: async (email) => {
    await delay(1000);

    const user = users.find(
      (u) =>
        u.email.toLowerCase() ===
        email.toLowerCase()
    );

    if (!user) {
      throw new Error("Email not found");
    }

    return {
      message:
        "Password reset link sent successfully.",
    };
  },

  resetPassword: async () => {
    await delay(1000);

    return {
      message:
        "Password updated successfully.",
    };
  },

  logout: async () => {
    await delay(500);

    return true;
  },
};

export default authService;
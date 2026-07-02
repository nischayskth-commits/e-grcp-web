import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
  Alert,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import FormInput from "../../../components/common/FormInput";
import PasswordInput from "../../../components/common/PasswordInput";
import Loader from "../../../components/common/Loader";

import loginSchema from "../validation/loginSchema";
import { loginUser, clearError } from "../redux/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    loading,
    error,
    isAuthenticated,
    user,
  } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  useEffect(() => {
    console.log("Authenticated:", isAuthenticated);
    console.log("User:", user);
    console.log("Role:", user?.role);

    if (isAuthenticated && user) {
      if (user.role === "Auditor") {
        console.log("➡ Redirecting to /audit");
        navigate("/audit", { replace: true });
      } else {
        console.log("➡ Redirecting to /dashboard");
        navigate("/dashboard", { replace: true });
      }
    }
  }, [isAuthenticated, user, navigate]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 470,
      }}
    >
      <CardContent sx={{ p: 5 }}>
        <Stack spacing={3} alignItems="center">
          <Avatar
            sx={{
              bgcolor: "primary.main",
              width: 70,
              height: 70,
            }}
          >
            <LockOutlinedIcon fontSize="large" />
          </Avatar>

          <Typography variant="h4" fontWeight="bold">
            Sign In
          </Typography>

          <Typography color="text.secondary">
            Login to continue
          </Typography>

          {error && (
            <Alert severity="error" sx={{ width: "100%" }}>
              {error}
            </Alert>
          )}

          <Box
            component="form"
            width="100%"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Stack spacing={3}>
              <FormInput
                label="Email Address"
                name="email"
                register={register}
                errors={errors}
                type="email"
              />

              <PasswordInput
                label="Password"
                name="password"
                register={register}
                errors={errors}
              />

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      {...register("rememberMe")}
                      color="primary"
                    />
                  }
                  label="Remember Me"
                />

                <Typography
                  component={Link}
                  to="/forgot-password"
                  variant="body2"
                  sx={{
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Forgot Password?
                </Typography>
              </Stack>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={loading}
                sx={{
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 700,
                  borderRadius: 2,
                }}
              >
                {loading ? <Loader /> : "Sign In"}
              </Button>
            </Stack>
          </Box>

          <Typography
            mt={2}
            align="center"
            variant="body2"
            color="text.secondary"
          >
            Enterprise Governance, Risk, Compliance & Procurement Platform
          </Typography>

          <Typography
            align="center"
            variant="caption"
            color="text.secondary"
          >
            Version 1.0.0
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Login;
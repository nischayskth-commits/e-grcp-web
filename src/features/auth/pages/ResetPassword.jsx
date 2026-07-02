import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

import PasswordInput from "../../../components/common/PasswordInput";
import Loader from "../../../components/common/Loader";

import resetPasswordSchema from "../validation/resetPasswordSchema";

import {
  resetPassword,
  clearError,
  clearSuccess,
} from "../redux/authSlice";

import { useEffect } from "react";

const ResetPassword = () => {
  const dispatch = useDispatch();

  const {
    loading,
    error,
    success,
  } = useSelector(
    (state) => state.auth
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    return () => {
      dispatch(clearError());
      dispatch(clearSuccess());
    };
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(resetPassword(data));
  };

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 450,
      }}
    >
      <CardContent sx={{ p: 5 }}>
        <Stack spacing={3}>

          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Reset Password
          </Typography>

          <Typography
            color="text.secondary"
          >
            Create a new password.
          </Typography>

          {error && (
            <Alert severity="error">
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success">
              {success}
            </Alert>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >

            <Stack spacing={3}>

              <PasswordInput
                label="New Password"
                name="password"
                register={register}
                errors={errors}
              />

              <PasswordInput
                label="Confirm Password"
                name="confirmPassword"
                register={register}
                errors={errors}
              />
                            <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={loading}
                sx={{
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  borderRadius: 2,
                }}
              >
                {loading ? (
                  <Loader />
                ) : (
                  "Reset Password"
                )}
              </Button>

              <Typography
                align="center"
                variant="body2"
              >
                Remember your password?{" "}

                <Typography
                  component={Link}
                  to="/login"
                  display="inline"
                  color="primary"
                  fontWeight="bold"
                  sx={{
                    textDecoration: "none",
                  }}
                >
                  Login
                </Typography>

              </Typography>

            </Stack>

          </Box>

        </Stack>

      </CardContent>

    </Card>

  );

};

export default ResetPassword;
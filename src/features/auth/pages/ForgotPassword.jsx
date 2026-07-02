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

import FormInput from "../../../components/common/FormInput";
import Loader from "../../../components/common/Loader";

import forgotPasswordSchema from "../validation/forgotPasswordSchema";

import {
  forgotPassword,
  clearError,
  clearSuccess,
} from "../redux/authSlice";

import { useEffect } from "react";

const ForgotPassword = () => {

  const dispatch = useDispatch();

  const {

    loading,

    error,

    success,

  } = useSelector(

    (state)=>state.auth

  );

  const{

    register,

    handleSubmit,

    formState:{errors}

  }=useForm({

    resolver:yupResolver(

      forgotPasswordSchema

    ),

    defaultValues:{

      email:""

    }

  });

  useEffect(()=>{

      return()=>{

          dispatch(clearError());

          dispatch(clearSuccess());

      }

  },[dispatch]);

  const onSubmit=(data)=>{

      dispatch(

        forgotPassword(data.email)

      );

  };

  return(

<Card

elevation={0}

sx={{

width:"100%",

maxWidth:450

}}

>

<CardContent sx={{p:5}}>

<Stack spacing={3}>

<Typography

variant="h4"

fontWeight="bold"

>

Forgot Password

</Typography>

<Typography

color="text.secondary"

>

Enter your registered email address.

</Typography>

{

error && (

<Alert severity="error">

{error}

</Alert>

)

}

{

success && (

<Alert severity="success">

{success}

</Alert>

)

}

<Box

component="form"

onSubmit={

handleSubmit(onSubmit)

}

>

<Stack spacing={3}>

<FormInput

label="Email Address"

name="email"

register={register}

errors={errors}

type="email"

/>
<Button
type="submit"
variant="contained"
size="large"
fullWidth
disabled={loading}
sx={{
py:1.5,
fontWeight:"bold",
fontSize:"1rem"
}}
>
{loading ? <Loader /> : "Send Reset Link"}
</Button>

<Typography
align="center"
variant="body2"
>

Back to{" "}

<Typography
component={Link}
to="/login"
display="inline"
color="primary"
fontWeight="bold"
sx={{
textDecoration:"none"
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

export default ForgotPassword;
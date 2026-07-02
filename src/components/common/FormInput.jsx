import TextField from "@mui/material/TextField";

const FormInput = ({
  label,
  type = "text",
  register,
  name,
  errors,
  ...props
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      {...register(name)}
      error={!!errors[name]}
      helperText={errors[name]?.message}
      {...props}
    />
  );
};

export default FormInput;
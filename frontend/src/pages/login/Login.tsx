import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/auth/authSlice";
import { Box, TextField, Button } from "../../utils/uiCore";
import { useStyles } from "./style";
import { signInValidation } from "../../utils/formikValidation";
import { Dispatch, useEffect } from "react";
import { paths } from "../../path/path";
import { showToasterError } from "../../utils/showToaster";
import { LoginData } from "./login.interface";

export const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  const { user, isLoading, isError, isSuccess, error } = useSelector(
    (state: any) => state?.auth
  );

  const handleSubmit = async (values: LoginData) => {
    dispatch(login(values));
  };

  useEffect(() => {
    if (user) {
      navigate(paths.list_order);
    }
    if (isError) {
      showToasterError(error);
    }
  }, [user, isLoading, isError, isSuccess, error]);


  return (
    <Box className={classes.registerMain}>
      <Box className={classes.signupCard}>
        <Box className={classes.signupHeadding}>Login</Box>
        <Formik
          initialValues={{ phone_number: "", password: "" }}
          validationSchema={signInValidation}
          onSubmit={handleSubmit}>
          <Form>
            <Box className = {classes.errorText}>{isError? error :"" }</Box>
            <Box className={classes.textField}>
              <Field name="phone_number">
                {({ field }: any) => (
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    {...field}
                    fullWidth
                    error={Boolean(field.value && field.error)}
                    helperText={field.value && field.error ? field.error : ""}
                  />
                )}
              </Field>
              <ErrorMessage
                className={classes.errorComponent}
                name="phone_number"
                component="Box"
              />
            </Box>

            <Box className={classes.textField}>
              <Field name="password">
                {({ field }: any) => (
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    {...field}
                    fullWidth
                    error={Boolean(field.value && field.error)}
                    helperText={field.value && field.error ? field.error : ""}
                  />
                )}
              </Field>
              <ErrorMessage
                className={classes.errorComponent}
                name="password"
                component="Box"
              />
            </Box>

            <Button
              className={classes.button}
              fullWidth
              type="submit"
              variant="contained"
              color="primary">
              SignIn
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

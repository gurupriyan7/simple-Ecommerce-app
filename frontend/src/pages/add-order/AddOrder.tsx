import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrder, reset } from "../../features/order/orderSlice";
import { Box ,TextField, Button} from "../../utils/uiCore";
import { useStyles } from "./style";
import { orderValidation } from "../../utils/formikValidation";
import { Dispatch, useEffect } from "react";
import { paths } from "../../path/path";
import { toast } from "react-toastify";
import { OrderData } from "./addOrder.interface";
import { Layout } from "../../layout";

export const AddOrder = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  const { order, isLoading, isError, isSuccess, error } = useSelector(
    (state: any) => state?.order
  );

  const handleSubmit = async (values: OrderData) => {
    dispatch(addOrder(values));
  };

  useEffect(() => {
    if (order || isSuccess) {
      navigate(paths.add_order);
    }
    if (isError) {
      console.log(error,"error");
      
      toast.error(error);
    }
    dispatch(reset())
  }, [order, isLoading, isError, isSuccess, error]);

  return (
    <Layout heading={"Place Order"}>
    <Box className={classes.registerMain}>
      <Box className={classes.signupCard}>
        <Box className={classes.signupHeadding}>Place Order</Box>
        <Formik
          initialValues={{ sub_total:"",phone_number:"" }}
          validationSchema={orderValidation}
          onSubmit={handleSubmit}>
          <Form>
            <Box className={classes.textField}>
              <Field name="sub_total">
                {({ field }: any) => ( 
                  <TextField
                    label="Amount"
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
                name="sub_total"
                component="Box"
              />
            </Box>

            <Box className={classes.textField}>
              <Field name="phone_number">
                {({ field }: any) => (
                  <TextField
                    label="PhoneNumber"
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

            <Button
              className={classes.button}
              fullWidth
              type="submit"
              variant="contained"
              color="primary">
              Place Order
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
    </Layout>
  );
};

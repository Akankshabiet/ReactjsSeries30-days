import * as yup from "yup";

export const productSchema = yup.object({
  name: yup.string().required("Product name is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Price is required"),
  description: yup.string().max(200, "Max 200 characters allowed"),
});

import Input from "../../common/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./signup.css";
import { NavLink } from "react-router-dom";

const SignupForm = () => {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: "",
  };

  const onSubmit = (value) => {
    console.log({ value });
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    phoneNumber: Yup.string().required("PhoneNumber is required"),
    password: Yup.string().required("Password is required"),
    passwordConfirm: Yup.string()
      .required("PasswordConfirm is required")
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="formContainer">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="name" label="Name" type="text" />
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="phoneNumber"
          label="PhoneNumber"
          type="tel"
        />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <Input
          formik={formik}
          name="passwordConfirm"
          label="PasswordConfirm"
          type="password"
        />
        <button
          className="btn primary"
          type="submit"
          disabled={!formik.isValid}
        >
          Signup
        </button>
        <NavLink to="/login">
          <p> Already login ?</p>
        </NavLink>
      </form>
    </div>
  );
};
export default SignupForm;

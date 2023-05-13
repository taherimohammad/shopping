import Input from "../../common/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (value) => {
    console.log({ value });
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
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
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <button
          className="btn primary"
          type="submit"
          disabled={!formik.isValid}
        >
          Login
        </button>

        <NavLink to="/signup">
          <p> Not signup yet ?</p>
        </NavLink>
      </form>
    </div>
  );
};
export default LoginForm;

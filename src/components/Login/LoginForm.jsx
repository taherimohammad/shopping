import Input from "../../common/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/loginService";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
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

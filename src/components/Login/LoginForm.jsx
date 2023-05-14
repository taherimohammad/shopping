import Input from "../../common/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { loginUser } from "../../services/loginService";
import { toast } from "react-toastify";
import { useAuthAction, useAuth } from "../../Providers/AuthProvider";
import { useEffect } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const setAuth = useAuthAction();
  const auth = useAuth();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  useEffect(() => {
    if (auth) navigate(redirect, { replace: true });
  }, [redirect, auth]);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setAuth(data);
      navigate(`/${redirect}`);
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

        <NavLink to={`/signup?redirect=${redirect}`}>
          <p> Not signup yet ?</p>
        </NavLink>
      </form>
    </div>
  );
};
export default LoginForm;

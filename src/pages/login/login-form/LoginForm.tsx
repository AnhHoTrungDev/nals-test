import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { InputForm } from "src/components/form";
import AuthContext from "src/context/auth/auth.context";
import { useYupValidationResolver } from "src/hook";
import * as yup from "yup";
import axiosClient from "../../../config/call-api";
import { Link, useHistory } from "react-router-dom";
import { protectedRoutes } from "src/config/router/routes";
import { ILoginInputs } from "./LoginForm.d";

const validationSchema = yup.object({
  username: yup
    .string()
    .required("Required !")
    .trim("The contact name cannot include leading and trailing spaces"),
  password: yup
    .string()
    .required("Required !")
    .trim("The contact name cannot include leading and trailing spaces"),
});

const LoginForm: React.FC = () => {
  const resolver = useYupValidationResolver(validationSchema);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const {
    setError,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInputs>({ resolver, mode: "onChange" });
  const { username, password } = errors || {};
  const { dispatchAuthAction } = useContext(AuthContext);
  const isUnmounted = useRef<boolean>(false);

  useEffect(() => {
    isUnmounted.current = false;
    return () => {
      isUnmounted.current = true;
    };
  }, []);

  const onSubmit = useCallback(
    (data: any) => {
      const { password, username } = data;
      setIsLoading(true);
      axiosClient
        .post(`/login`, {
          username,
          password,
        })
        .then((response) => {
          if (response && response.data) {
            const {
              data: { token },
            } = response;

            if (token) {
              localStorage.setItem("authentication", `${token}`);
              dispatchAuthAction({
                type: "SWITCH_AUTH_STATE",
                payload: { state: true },
              });
              history.push(protectedRoutes?.users?.path);
            }
            !isUnmounted.current && setIsLoading(false);
          }
        })
        .catch(() => {
          reset({});
          setIsLoading(false);
          setError(
            "username",
            {
              type: "unauthorized",
              message: "Login failed !",
            },
            { shouldFocus: true }
          );
          setError("password", {
            type: "unauthorized",
            message: "",
          });
        });
    },
    [dispatchAuthAction, history, reset, setError]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-3 needs-validation">
      <div className="form-group">
        <InputForm
          IsInvalid={!!username}
          placeholder="Username"
          fieldError={username}
          {...register("username")}
        />
      </div>
      <div className="form-group">
        <InputForm
          type="password"
          IsInvalid={!!password}
          placeholder="Password"
          {...register("password")}
          fieldError={password}
        />
      </div>
      <div className="mt-3">
        <button
          className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
          type="submit"
        >
          {!isLoading ? (
            "SIGN IN"
          ) : (
            <div className="spinner-grow" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </button>
      </div>
      <div className="my-2 d-flex justify-content-between align-items-center">
        <div className="form-check">
          <label className="form-check-label text-muted">
            <input type="checkbox" className="form-check-input" />
            Keep me signed in
            <i className="input-helper"></i>
          </label>
        </div>
        <a href="#x" className="auth-link text-black">
          Forgot password?
        </a>
      </div>
      <div className="mb-2">
        <button
          type="button"
          className="btn btn-block btn-facebook auth-form-btn"
        >
          <i className="ti-facebook mr-2"></i>Connect using facebook
        </button>
      </div>
      <div className="text-center mt-4 font-weight-light">
        Don't have an account? &nbsp;
        <Link to="/auth/registration" className="text-primary">
          Create
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;

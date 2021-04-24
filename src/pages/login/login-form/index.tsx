import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { InputForm } from "src/components/form";
import AuthContext from "src/context/auth/auth.context";
import { useYupValidationResolver } from "src/hook";
import * as yup from "yup";
import API from "../../../config/call-api";
import { useHistory } from "react-router-dom";
import { protectedRoutes } from "src/config/router/routes";

type ILoginInputs = {
  userName: string;
  password: string;
};

const validationSchema = yup.object({
  userName: yup.string().required("Required !"),
  password: yup.string().required("Required !"),
});

const LoginForm: React.FC = () => {
  const resolver = useYupValidationResolver(validationSchema);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInputs>({ resolver });

  const { userName, password } = errors || {};

  const [, dispatchAuthAction] = useContext(AuthContext);

  const onSubmit = (data: any) => {
    const { password, userName: username } = data;

    API.post(`/login`, {
      username,
      password,
    })
      .then((response) => {
        if (response) {
          const {
            data: { token },
          } = response;
          if (token) {
            localStorage.setItem("authentication", `Bearer ${token}`);
            dispatchAuthAction({
              type: "SWITCH_AUTH_STATE",
              payload: { state: true },
            });
            setTimeout(() => {
              history.push(protectedRoutes?.users?.path);
            }, 300);
          }
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-3 needs-validation">
      <div className="form-group">
        <InputForm
          IsInvalid={!!userName}
          placeholder="Username"
          {...register("userName")}
        />
        <div className="invalid-feedback">{userName?.message}</div>
      </div>
      <div className="form-group">
        <InputForm
          type="password"
          IsInvalid={!!password}
          placeholder="Password"
          {...register("password")}
        />
        <div className="invalid-feedback">{password?.message}</div>
      </div>
      <div className="mt-3">
        <button
          className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
          type="submit"
        >
          SIGN IN
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
        Don't have an account?{" "}
        <a href="register.html" className="text-primary">
          Create
        </a>
      </div>
    </form>
  );
};

export default LoginForm;

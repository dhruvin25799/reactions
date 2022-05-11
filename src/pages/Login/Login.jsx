import React, { useEffect, useReducer } from "react";
import styles from "./Login.module.css";
import { Button, Logo } from "../../components/index";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/auth-slice";
import {
  loginInputReducer,
  initialLoginInputState,
} from "../../reducers/loginReducer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [loginInputState, loginInputDispatch] = useReducer(
    loginInputReducer,
    initialLoginInputState
  );
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginInputState));
  };
  useEffect(() => {
    if (isLoggedIn === true) {
      toast.success("Login Successfull", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, navigate]);
  return (
    <>
      <main className={styles["login-main"]}>
        <div className={styles["login-box"]}>
          <Logo />
          <form onSubmit={formSubmitHandler}>
            <div className={styles["input-control"]}>
              <input
                type="email"
                placeholder="Email"
                autoComplete="username"
                required
                value={loginInputState.email}
                onChange={(e) =>
                  loginInputDispatch({
                    type: "EMAIL",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <input
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={loginInputState.password}
                onChange={(e) =>
                  loginInputDispatch({
                    type: "PASSWORD",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <Button>Log In</Button>
          </form>
          <h5 className={styles["centered-text"]}>
            <span>OR</span>
          </h5>
          <p>
            Dont have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </main>
    </>
  );
};

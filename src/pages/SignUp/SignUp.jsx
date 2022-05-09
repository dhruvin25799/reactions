import React, { useReducer, useEffect } from "react";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Logo } from "../../components/Logo/Logo";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../store/auth-slice";
import {
  signUpInputReducer,
  initialSignUpState,
} from "../../reducers/signUpReducer";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const SignUp = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUpInputState, signUpInputDispatch] = useReducer(
    signUpInputReducer,
    initialSignUpState
  );
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(signUpUser(signUpInputState));
  };
  useEffect(() => {
    if (isLoggedIn === true) {
      toast.success("Account Registered", {
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
      <main className={styles["signup-main"]}>
        <div className={styles["signup-box"]}>
          <Logo />
          <form onSubmit={formSubmitHandler}>
            <div className={styles["input-control"]}>
              <input
                type="text"
                required
                placeholder="First Name"
                value={signUpInputState.firstName}
                onChange={(e) =>
                  signUpInputDispatch({
                    type: "FNAME",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <input
                type="text"
                required
                placeholder="Last Name"
                value={signUpInputState.lastName}
                onChange={(e) =>
                  signUpInputDispatch({
                    type: "LNAME",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <input
                type="email"
                autoComplete="username"
                required
                placeholder="Email"
                value={signUpInputState.email}
                onChange={(e) =>
                  signUpInputDispatch({
                    type: "EMAIL",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles["input-control"]}>
              <input
                type="password"
                autoComplete="new-password"
                required
                placeholder="Password"
                value={signUpInputState.password}
                onChange={(e) =>
                  signUpInputDispatch({
                    type: "PASSWORD",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <Button>Sign Up</Button>
          </form>
          <h5 className={styles["centered-text"]}>
            <span>OR</span>
          </h5>
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </main>
    </>
  );
};

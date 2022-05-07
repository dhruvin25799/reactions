import React from "react";
import styles from "./Login.module.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo/Logo";

export const Login = () => {
  return (
    <>
      <main className={styles["login-main"]}>
        <div className={styles["login-content"]}>
          <div className={styles["login-animation"]}>
            <Player
              autoplay
              loop
              src="https://assets7.lottiefiles.com/packages/lf20_mjlh3hcy.json"
              style={{ height: "450px", width: "450px" }}
            ></Player>
          </div>
          <div className={styles["login-box"]}>
            <Logo />
            <form>
              <div className={styles["input-control"]}>
                <input type="email" placeholder="Email" required />
              </div>
              <div className={styles["input-control"]}>
                <input type="password" required placeholder="Password" />
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
        </div>
      </main>
    </>
  );
};

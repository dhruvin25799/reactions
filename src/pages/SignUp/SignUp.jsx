import React from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Logo } from "../../components/Logo/Logo";

export const SignUp = () => {
  return (
    <>
      <main className={styles["signup-main"]}>
        <div className={styles["signup-box"]}>
          <Logo/>
          <form>
            <div className={styles["input-control"]}>
              <input type="text" required placeholder="First Name" />
            </div>
            <div className={styles["input-control"]}>
              <input type="text" required placeholder="Last Name" />
            </div>
            <div className={styles["input-control"]}>
              <input type="email" required placeholder="Email" />
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
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </main>
    </>
  );
};

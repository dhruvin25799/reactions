import React from "react";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/theme-context";
import { Logo } from "../Logo/Logo";

export const NavBar = () => {
  const { isDark, setIsDark } = useTheme();
  return (
    <>
      <nav className={styles["nav"]}>
        <div className={styles["nav-brand"]}>
          <Logo />
        </div>
        <div>
          <input />
        </div>
        <menu className={styles["nav-cta"]}>
          <li>
            <FontAwesomeIcon
              icon={isDark ? faSun : faMoon}
              size="2x"
              onClick={() => setIsDark(!isDark)}
            />
          </li>
          <li>Login</li>
        </menu>
      </nav>
    </>
  );
};

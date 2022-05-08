import React from "react";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../Logo/Logo";
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../../store/theme-slice";

export const NavBar = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();
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
              onClick={() => dispatch(themeActions.toggle())}
            />
          </li>
          <li>Login</li>
        </menu>
      </nav>
    </>
  );
};

import React from "react";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../Logo/Logo";
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../../store/theme-slice";
import { Button } from "../Button/Button";
import { authActions } from "../../store/auth-slice";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <>
      <nav className={styles["nav"]}>
        <div className={styles["nav-brand"]}>
          <Logo />
        </div>
        <div className={styles["nav-search"]}>
          <label>
            <FontAwesomeIcon icon={faSearch} />
          </label>
          <input placeholder="Search" />
        </div>
        <menu className={styles["nav-cta"]}>
          <li>
            <FontAwesomeIcon
              icon={isDark ? faSun : faMoon}
              size="2x"
              onClick={() => dispatch(themeActions.toggle())}
            />
          </li>
          <li>
            {isLoggedIn ? (
              <Button onClick={() => dispatch(authActions.logout())}>
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            )}
          </li>
        </menu>
      </nav>
    </>
  );
};

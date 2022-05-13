import React from "react";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faSearch,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faSquarePlus as faSqaurePlusSolid } from "@fortawesome/free-solid-svg-icons";
import { Logo, Button } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../../store/theme-slice";
import { authActions } from "../../store/auth-slice";
import { Link, NavLink } from "react-router-dom";
import { modalActions } from "../../store/modal-slice";

export const NavBar = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.userData.username);
  const showModal = useSelector((state) => state.modal.showModal);
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
              size="lg"
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
          <li>
            <NavLink to={"/profile/" + username}>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </NavLink>
          </li>
          <li onClick={() => dispatch(modalActions.toggle())}>
            <FontAwesomeIcon
              icon={showModal ? faSqaurePlusSolid : faSquarePlus}
              size="lg"
            />
          </li>
          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faHome} size="lg" />
            </NavLink>
          </li>
        </menu>
      </nav>
    </>
  );
};

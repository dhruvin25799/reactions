import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faSearch,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faSquarePlus,
  faFloppyDisk,
  faSmileWink,
} from "@fortawesome/free-regular-svg-icons";
import {
  faSquarePlus as faSqaurePlusSolid,
  faSmileWink as faSmileWinkSolid,
} from "@fortawesome/free-solid-svg-icons";
import { Logo, Button } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../../store/theme-slice";
import { authActions } from "../../store/auth-slice";
import { Link, NavLink } from "react-router-dom";
import { modalActions } from "../../store/modal-slice";
import { myDebounce } from "../../helpers/debounce";
import { getAllUsers } from "../../helpers/getFunctions";

export const NavBar = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.userData.username);
  const showModal = useSelector((state) => state.modal.showModal);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [searchOutput, setSearchOutput] = useState([]);
  const [toggle, setToggle] = useState(false);
  const handleNav = () => {
    setToggle((prevValue) => !prevValue);
  };
  const handleSearch = myDebounce((e) => {
    setQuery(e.target.value);
  }, 500);
  useEffect(() => {
    if (query !== "") {
      (async () => {
        const data = await getAllUsers();
        const users = data.users.filter((user) =>
          user.username.includes(query)
        );
        setSearchOutput(users);
      })();
    }
  }, [query]);
  return (
    <>
      <nav className={`${styles["nav"]} ${toggle && styles["display"]}`}>
        <div className={styles["nav-brand"]}>
          <Logo />
        </div>
        <div className={styles["nav-hamburger"]}>
          <FontAwesomeIcon
            icon={!toggle ? faSmileWink : faSmileWinkSolid}
            size="lg"
            onClick={handleNav}
          />
        </div>
        <div
          className={`${styles["nav-search"]} ${toggle && styles["display"]}`}
        >
          <div className={styles["search-input"]}>
            <label>
              <FontAwesomeIcon icon={faSearch} />
            </label>
            <input placeholder="Search" onChange={handleSearch} />
          </div>
          {query !== "" && (
            <div className={styles["search-output"]}>
              <ul>
                {searchOutput.map((user) => (
                  <li key={user.username} onClick={() => setQuery("")}>
                    <Link to={"/profile/" + user.username}>
                      <FontAwesomeIcon icon={faUser} size="lg" />
                      <p>{user.firstName + " " + user.lastName}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <menu className={`${styles["nav-cta"]} ${toggle && styles["display"]}`}>
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
            <NavLink to="/bookmarks">
              <FontAwesomeIcon icon={faFloppyDisk} size="lg" />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/profile/" + username}>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </NavLink>
          </li>
          <li onClick={() => isLoggedIn && dispatch(modalActions.toggle())}>
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

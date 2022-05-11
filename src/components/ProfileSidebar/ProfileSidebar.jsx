import React from "react";
import styles from "./ProfileSidebar.module.css";
import { AvatarIcon, Button } from "../index";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faUsers, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const ProfileSidebar = () => {
  const userData = useSelector(state => state.auth.userData);
  return (
    <>
      <div className={styles["profile-fixed"]}>
        <Link to={`/profile/${userData.username}`}>
          <div className={styles["profile-owner"]}>
            <div className={styles["owner-icon"]}>
              <AvatarIcon />
            </div>
            <div className={styles["owner-info"]}>
              <p>{userData.username}</p>
              <p>
                {userData.firstName} {userData.lastName}
              </p>
            </div>
          </div>
        </Link>
        <ul className={styles["profile-cta"]}>
          <li>
            <Button>
              <FontAwesomeIcon icon={faSquarePlus} />
              Create Post
            </Button>
          </li>

          <li>
            <FontAwesomeIcon icon={faUsers} />
            Followers : {userData.followers.length}
          </li>
          <li>
            <FontAwesomeIcon icon={faUserCheck} />
            Following : {userData.following.length}
          </li>
        </ul>
      </div>
    </>
  );
};

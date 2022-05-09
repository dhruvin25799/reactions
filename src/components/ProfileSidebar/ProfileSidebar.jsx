import React from "react";
import styles from "./ProfileSidebar.module.css";
import { AvatarIcon } from "../AvatarIcon/AvatarIcon";

export const ProfileSidebar = () => {
    return (
      <>
        <div className={styles["profile-fixed"]}>
          <div className={styles["profile-owner"]}>
            <div className={styles["owner-icon"]}>
              <AvatarIcon />
            </div>
            <div className={styles["owner-info"]}>
              <p>itachiuchiha25799</p>
              <p>Dhruvin Mehta</p>
            </div>
          </div>
          <ul className={styles["profile-cta"]}>
            <li>Create Post</li>
            <li>My Profile</li>
            <li>Followers</li>
            <li>Following</li>
            <li>Bookmarks</li>
          </ul>
        </div>
      </>
    );
}
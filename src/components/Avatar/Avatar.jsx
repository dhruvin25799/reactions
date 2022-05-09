import React from "react";
import { AvatarIcon } from "../AvatarIcon/AvatarIcon";
import styles from "./Avatar.module.css";

export const Avatar = (props) => {
  return (
    <>
      <div className={styles["avatar-container"]}>
        <AvatarIcon/>
        <p>Dhruvin</p>
      </div>
    </>
  );
};

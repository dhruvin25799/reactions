import React from "react";
import {AvatarIcon} from "../index";
import styles from "./Avatar.module.css";
import { Link } from "react-router-dom";

export const Avatar = (props) => {
  return (
    <>
      <Link to={"/profile/" + props.username}>
        <div className={styles["avatar-container"]}>
          <AvatarIcon />
          <p>{props.username}</p>
        </div>
      </Link>
    </>
  );
};

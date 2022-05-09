import React from "react";
import styles from "./Post.module.css";
import { AvatarIcon } from "../AvatarIcon/AvatarIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faFloppyDisk,
} from "@fortawesome/free-regular-svg-icons";

export const Post = (props) => {
  return (
    <>
      <article className={styles["post-card"]}>
        <div className={styles["post-header"]}>
          <div className={styles["author-icon"]}>
            <AvatarIcon />
          </div>
          <div className={styles["author-details"]}>
            <p>itachiuchiha25799@gmail.com</p>
            <p>9th May, 2022</p>
          </div>
        </div>
        <div className={styles["post-content"]}>
          <img src="/avatar.png" alt="" />
        </div>
        <div className={styles["post-cta"]}>
          <FontAwesomeIcon icon={faThumbsUp} size="2x" />
          <FontAwesomeIcon icon={faFloppyDisk} size="2x" />
        </div>
        <div className={styles["post-footer"]}>
          <p>Liked by dhruvin and 123 others</p>
        </div>
        <div className={styles["post-comments"]}>
          <div className={styles["comment"]}>
            <p>dhruvin25799</p>
            <p>Great pic, info</p>
          </div>
          <div className={styles["comment"]}>
            <p>dhruvin25799</p>
            <p>Great pic, info</p>
          </div>
          <div className={styles["comment"]}>
            <p>dhruvin25799</p>
            <p>Great pic, info</p>
          </div>
        </div>
      </article>
    </>
  );
};

import React from "react";
import styles from "./Post.module.css";
import { AvatarIcon } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faFloppyDisk,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

export const Post = ({ data }) => {
  const user = useSelector(state=>state.auth.userData.username);
  return (
    <>
      <article className={styles["post-card"]}>
        <Link to={"/profile/" + data.username}>
          <div className={styles["post-header"]}>
            <div className={styles["author-icon"]}>
              <AvatarIcon />
            </div>
            <div className={styles["author-details"]}>
              <p>{data.username}</p>
              <p>{new Date(data.createdAt).toDateString()}</p>
            </div>
          </div>
        </Link>
        <div className={styles["post-content"]}>
          <img src="https://i.redd.it/af1l8nnevhx81.jpg" alt="" />
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

import React from "react";
import { Post } from "../index";
import styles from "./PostList.module.css";

export const PostList = (props) => {
  return (
    <>
      <div className={styles["post-container"]}>
        {props.posts.map((post) => (
          <Post key={post._id} data={post} />
        ))}
      </div>
    </>
  );
};

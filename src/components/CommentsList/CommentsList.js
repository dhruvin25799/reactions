import React, { useState, useRef } from "react";
import styles from "./CommentsList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { Button } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { postComment } from "../../store/post-slice";

export const CommentsList = ({ data }) => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const commentInputRef = useRef();
  const [showAllComments, setShowAllComments] = useState(false);
  const addCommentHandler = async (e) => {
    e.preventDefault();
    await dispatch(postComment(data._id, token, commentInputRef.current.value));
    commentInputRef.current.value = "";
  };
  const comments = showAllComments ? data.comments : data.comments.slice(0, 2);
  return (
    <>
      <div className={styles["post-comments"]}>
        {data.comments.length > 2 &&
          (showAllComments ? (
            <p
              className={styles["hide-comments"]}
              onClick={() => setShowAllComments(false)}
            >
              Hide {data.comments.length} comments
            </p>
          ) : (
            <p
              className={styles["hide-comments"]}
              onClick={() => setShowAllComments(true)}
            >
              View all {data.comments.length} comments
            </p>
          ))}
        {comments.map((comment) => (
          <div className={styles["comment"]} key={comment._id}>
            <p>{comment.username}</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      <div className={styles["comment-input"]}>
        <form onSubmit={addCommentHandler}>
          <FontAwesomeIcon icon={faCommentDots} size="lg" />
          <input
            type="text"
            maxLength="30"
            placeholder="Add a comment..."
            required
            ref={commentInputRef}
          />
          <Button>Post</Button>
        </form>
      </div>
    </>
  );
};

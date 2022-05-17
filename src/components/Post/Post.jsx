import React from "react";
import styles from "./Post.module.css";
import { AvatarIcon } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import {
  faThumbsUp as faThumbsUpSolid,
  faFloppyDisk as faFloppyDiskSolid,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  dislikePosts,
  likePosts,
  bookmarkPosts,
  removeBookmarkPosts,
} from "../../store/post-slice";
import { CommentsList } from "../CommentsList/CommentsList";

export const Post = ({ data }) => {
  const username = useSelector((state) => state.auth.userData.username);
  const bookmarks = useSelector((state) => state.auth.userData.bookmarks);
  const token = useSelector((state) => state.auth.token);
  const isLiked = data.likes.likedBy.find((user) => user.username === username);
  const isBookmarked = bookmarks.find((post) => post._id === data._id);
  const dispatch = useDispatch();
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
          <img src={data.content} alt="" />
        </div>
        <div className={styles["post-cta"]}>
          {isLiked ? (
            <FontAwesomeIcon
              icon={faThumbsUpSolid}
              onClick={() => dispatch(dislikePosts(data._id, token))}
              size="lg"
              className={styles["colored"]}
            />
          ) : (
            <FontAwesomeIcon
              icon={faThumbsUp}
              size="lg"
              onClick={() => dispatch(likePosts(data._id, token))}
            />
          )}
          {isBookmarked ? (
            <FontAwesomeIcon
              icon={faFloppyDiskSolid}
              size="lg"
              className={styles["colored"]}
              onClick={() => dispatch(removeBookmarkPosts(data._id, token))}
            />
          ) : (
            <FontAwesomeIcon
              icon={faFloppyDisk}
              size="lg"
              onClick={() => dispatch(bookmarkPosts(data._id, token))}
            />
          )}
        </div>
        <div className={styles["post-footer"]}>
          {data.likes.likeCount >= 2 && (
            <p>
              Liked by{" "}
              <Link to={"/profile/" + data.likes.likedBy[0].username}>
                {data.likes.likedBy[0].username}
              </Link>{" "}
              and {data.likes.likeCount - 1} others
            </p>
          )}
          {data.likes.likeCount === 1 && (
            <p>
              Liked by{" "}
              <Link to={"/profile/" + data.likes.likedBy[0].username}>
                {data.likes.likedBy[0].username}
              </Link>
            </p>
          )}
          {data.likes.likeCount < 1 && <p>No likes yet!</p>}
        </div>
        <div className={styles["post-caption"]}>
          <Link to={"/profile/" + data.username}>{data.username}</Link>
          <p>{data.caption}</p>
        </div>
        <CommentsList data={data} />
      </article>
    </>
  );
};

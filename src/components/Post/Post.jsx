import React, { useReducer, useState } from "react";
import styles from "./Post.module.css";
import { AvatarIcon, Button } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import {
  faThumbsUp as faThumbsUpSolid,
  faFloppyDisk as faFloppyDiskSolid,
  faPen,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  dislikePostsThunk,
  likePostsThunk,
  bookmarkPosts,
  removeBookmarkPosts,
  editPostsThunk,
} from "../../store/post-slice";
import { CommentsList } from "../CommentsList/CommentsList";
import { deletePostsThunk } from "../../store/post-slice";
import { styleRing } from "../../reducers/modalReducer";

export const Post = ({ data }) => {
  const username = useSelector((state) => state.auth.userData.username);
  const bookmarks = useSelector((state) => state.auth.userData.bookmarks);
  const token = useSelector((state) => state.auth.token);
  const isLiked = data.likes.likedBy.find((user) => user.username === username);
  const isBookmarked = bookmarks.find((post) => post._id === data._id);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const { colored, gray } = styleRing(data.content.length);
  const initialPostEditState = {
    body: data.content,
    charLength: data.content.length,
    strokeDashArray: `${colored} ${gray}`,
  };
  const postEditReducer = (state, action) => {
    switch (action.type) {
      case "POST_BODY": {
        const { colored, gray } = styleRing(action.payload.length);
        return {
          ...state,
          body: action.payload,
          charLength: action.payload.length,
          strokeDashArray: `${colored} ${gray}`,
        };
      }
      case "RESET": {
        return initialPostEditState;
      }
      default:
        return state;
    }
  };
  const [postEditState, postEditDispatch] = useReducer(
    postEditReducer,
    initialPostEditState
  );
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      editPostsThunk({
        postId: data._id,
        token,
        post: { content: postEditState.body },
      })
    );
    setEdit(false);
  };
  return (
    <>
      <article className={styles["post-card"]}>
        <div className={styles["post-header"]}>
          <Link to={"/profile/" + data.username}>
            <div className={styles["author-icon"]}>
              <AvatarIcon />
            </div>
            <div className={styles["author-details"]}>
              <p>{data.username}</p>
              <p>{new Date(data.createdAt).toDateString()}</p>
            </div>
          </Link>
          {data.username === username && (
            <div className={styles["author-cta"]}>
              <FontAwesomeIcon
                icon={edit ? faXmark : faPen}
                size="lg"
                onClick={() => {
                  edit && postEditDispatch({ type: "RESET" });
                  setEdit(!edit);
                }}
              />
              <FontAwesomeIcon
                icon={faTrash}
                size="lg"
                onClick={() =>
                  dispatch(deletePostsThunk({ postId: data._id, token }))
                }
              />
            </div>
          )}
        </div>
        <div className={styles["post-content"]}>
          {!edit && <h4>{data.content}</h4>}
          {edit && (
            <form
              className={styles["post-edit-form"]}
              onSubmit={formSubmitHandler}
            >
              <div className={styles["input-control-textarea"]}>
                <textarea
                  maxLength="200"
                  placeholder="Enter post body"
                  required
                  onChange={(e) =>
                    postEditDispatch({
                      type: "POST_BODY",
                      payload: e.target.value,
                    })
                  }
                  value={postEditState.body}
                  cols={200}
                  rows={10}
                />
                <svg className={styles["char-count"]}>
                  <circle id={styles["gray"]} cx="50%" cy="50%" r="15"></circle>
                  <circle
                    id={styles["colored"]}
                    cx="50%"
                    cy="50%"
                    r="15"
                    strokeDasharray={postEditState.strokeDashArray}
                  ></circle>
                </svg>
              </div>
              <Button>Save Edit</Button>
            </form>
          )}
        </div>
        <div className={styles["post-cta"]}>
          {isLiked ? (
            <FontAwesomeIcon
              icon={faThumbsUpSolid}
              onClick={() =>
                dispatch(dislikePostsThunk({ postId: data._id, token }))
              }
              size="lg"
              className={styles["colored"]}
            />
          ) : (
            <FontAwesomeIcon
              icon={faThumbsUp}
              size="lg"
              onClick={() =>
                dispatch(likePostsThunk({ postId: data._id, token }))
              }
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
        <CommentsList data={data} />
      </article>
    </>
  );
};

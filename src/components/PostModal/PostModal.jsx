import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./PostModal.module.css";
import { modalActions, sendPost } from "../../store/modal-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../index";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import {
  modalInputReducer,
  initialModalInputState,
} from "../../reducers/modalReducer";

const Backdrop = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles["backdrop"]}
      onClick={() => dispatch(modalActions.toggle())}
    ></div>
  );
};

export const PostModal = () => {
  const [modalInputState, modalInputDispatch] = useReducer(
    modalInputReducer,
    initialModalInputState
  );
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.modal.loading);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      sendPost(
        {
          content: modalInputState.url,
          caption: modalInputState.caption,
        },
        token
      )
    );
  };
  return (
    <>
      <Backdrop />
      <div className={styles["modal"]}>
        {loading === "sending" && <LoadingSpinner />}
        {!loading && (
          <>
            <div className={styles["modal-header"]}>
              <h3>Create new post</h3>
              <FontAwesomeIcon
                icon={faXmark}
                size="lg"
                onClick={() => dispatch(modalActions.toggle())}
              />
            </div>
            <hr />
            <form className={styles["modal-form"]} onSubmit={formSubmitHandler}>
              <div className={styles["input-control"]}>
                <label>Image/GIF Url : </label>
                <input
                  type="url"
                  required
                  onChange={(e) =>
                    modalInputDispatch({ type: "URL", payload: e.target.value })
                  }
                  value={modalInputState.url}
                  placeholder="Enter a valid URL"
                />
              </div>
              <div className={styles["input-control-textarea"]}>
                <label>Caption : </label>
                <textarea
                  maxLength="50"
                  placeholder="Enter a caption"
                  required
                  onChange={(e) =>
                    modalInputDispatch({
                      type: "CAPTION",
                      payload: e.target.value,
                    })
                  }
                  value={modalInputState.caption}
                  rows="5"
                />
                <svg className={styles["char-count"]}>
                  <circle id={styles["gray"]} cx="50%" cy="50%" r="15"></circle>
                  <circle
                    id={styles["colored"]}
                    cx="50%"
                    cy="50%"
                    r="15"
                    strokeDasharray={modalInputState.strokeDashArray}
                  ></circle>
                </svg>
              </div>
              <Button>Submit</Button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

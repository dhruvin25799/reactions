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
          content: modalInputState.body,
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
              <div className={styles["input-control-textarea"]}>
                <label>Post Body : </label>
                <textarea
                  maxLength="200"
                  placeholder="Enter post body"
                  required
                  onChange={(e) =>
                    modalInputDispatch({
                      type: "POST_BODY",
                      payload: e.target.value,
                    })
                  }
                  value={modalInputState.body}
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

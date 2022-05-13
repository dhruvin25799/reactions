import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./PostModal.module.css";
import { modalActions, sendPost } from "../../store/modal-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../index";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

const Backdrop = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles["backdrop"]}
      onClick={() => dispatch(modalActions.toggle())}
    ></div>
  );
};

const styleRing = (charLength) => {
  const r = 15;
  const circleLength = 2 * Math.PI * r;
  let colored = (circleLength * charLength) / 50;
  let gray = circleLength - colored > 0 ? circleLength - colored : 0;
  return { colored, gray };
};

const modalInputReducer = (state, action) => {
  switch (action.type) {
    case "URL": {
      return { ...state, url: action.payload };
    }
    case "CAPTION": {
      const { colored, gray } = styleRing(action.payload.length);
      return {
        ...state,
        caption: action.payload,
        charLength: action.payload.length,
        strokeDashArray: `${colored} ${gray}`,
      };
    }
    default:
      return state;
  }
};

const initialModalInputState = {
  url: "",
  caption: "",
  charLength: 0,
  strokeDashArray: "",
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
                    stroke="blue"
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

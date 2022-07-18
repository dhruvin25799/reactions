import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Profile.module.css";
import { useSelector } from "react-redux";
import {
  AvatarIcon,
  PostList,
  Button,
  LoadingSpinner,
} from "../../components/index";
import { useDispatch } from "react-redux";
import {
  editProfile,
  followUsers,
  getProfileDetailsThunk,
  unfollowUsers,
} from "../../store/profile-slice";

export const Profile = () => {
  const { userID } = useParams();
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts.allPosts);
  const posts = allPosts.filter((post) => post.username === userID);
  const userData = useSelector((state) => state.profile.profile);
  const username = useSelector((state) => state.auth.userData.username);
  const token = useSelector((state) => state.auth.token);
  const isSelf = userID === username;
  const following = useSelector((state) => state.auth.userData.following);
  const isFollowing = following.find((user) => user.username === userID);
  const status = useSelector((state) => state.profile.status);
  const [editForm, setEditForm] = useState(false);
  const profileReducer = (state, action) => {
    switch (action.type) {
      case "FIRST_NAME": {
        return { ...state, firstName: action.payload };
      }
      case "LAST_NAME": {
        return { ...state, lastName: action.payload };
      }
      case "RESET": {
        return initialProfileEditState;
      }
      default:
        return state;
    }
  };
  const initialProfileEditState = {
    firstName: userData.firstName,
    lastName: userData.lastName,
  };
  const [profileEditState, profileEditDispatch] = useReducer(
    profileReducer,
    initialProfileEditState
  );
  const profileEditHandler = () => {
    dispatch(
      editProfile({ token, user: { ...userData, ...profileEditState } })
    );
    setEditForm(false);
  };
  useEffect(() => {
    dispatch(getProfileDetailsThunk({ userID }));
  }, [dispatch, userID]);
  return (
    <>
      <main
        className={`${styles["profile-main"]} ${
          status === "loading" && styles["centered"]
        }`}
      >
        {status === "loading" && <LoadingSpinner />}
        {status === "success" && (
          <>
            <section className={styles["profile-header"]}>
              <div className={styles["profile-info"]}>
                <div className={styles["profile-icon"]}>
                  <AvatarIcon />
                </div>
                <div className={styles["profile-data"]}>
                  <div>
                    {!editForm && (
                      <h1>
                        {userData.firstName} {userData.lastName}
                      </h1>
                    )}
                    {editForm && (
                      <div>
                        <div className={styles["input-control"]}>
                          <input
                            type="text"
                            value={profileEditState.firstName}
                            onChange={(e) =>
                              profileEditDispatch({
                                type: "FIRST_NAME",
                                payload: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className={styles["input-control"]}>
                          <input
                            type="text"
                            value={profileEditState.lastName}
                            onChange={(e) =>
                              profileEditDispatch({
                                type: "LAST_NAME",
                                payload: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    )}
                    {isSelf ? (
                      <>
                        {editForm && (
                          <Button onClick={profileEditHandler}>Save</Button>
                        )}
                        <Button
                          onClick={() => {
                            profileEditDispatch({ type: "RESET" });
                            setEditForm(!editForm);
                          }}
                        >
                          {editForm ? "Close" : "Edit Profile"}
                        </Button>
                      </>
                    ) : isFollowing ? (
                      <Button
                        onClick={() => dispatch(unfollowUsers(userID, token))}
                      >
                        Unfollow
                      </Button>
                    ) : (
                      <Button
                        onClick={() => dispatch(followUsers(userID, token))}
                      >
                        Follow
                      </Button>
                    )}
                  </div>
                  <h3>@{userData.username}</h3>
                  <div className={styles["profile-stats"]}>
                    <p>{posts.length} Posts</p>
                    <p>{userData.following.length} Following</p>
                    <p>{userData.followers.length} Followers</p>
                  </div>
                </div>
              </div>
            </section>
            <hr />
            <section className={styles["profile-posts"]}>
              {posts.length === 0 && <p>No posts!</p>}
              <PostList posts={posts} />
            </section>
          </>
        )}
      </main>
    </>
  );
};

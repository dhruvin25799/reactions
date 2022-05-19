import React, { useEffect } from "react";
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
                    <h1>
                      {userData.firstName} {userData.lastName}
                    </h1>
                    {isSelf ? (
                      <Button>Edit Profile</Button>
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
                  <h5>Some bio</h5>
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

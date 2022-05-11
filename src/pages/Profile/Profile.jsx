import React, { useEffect, useState } from "react";
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
import { getProfileDetails } from "../../store/profile-slice";

export const Profile = () => {
  const { userID } = useParams();
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts.allPosts);
  const posts = allPosts.filter((post) => post.username === userID);
  const userData = useSelector((state) => state.profile.profile);
  const username = useSelector((state) => state.auth.userData.username);
  const isSelf = userID === username;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await dispatch(getProfileDetails(userID));
      setIsLoading(false);
    })();
  }, [dispatch, userID]);
  return (
    <>
      <main
        className={`${styles["profile-main"]} ${
          isLoading && styles["centered"]
        }`}
      >
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
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
                    {isSelf && <Button>Edit Profile</Button>}
                  </div>
                  <h3>@{userData.username}</h3>
                  <h5>Some bio</h5>
                  <div className={styles["profile-stats"]}>
                    <p>{posts.length} Posts</p>
                    <p>{!isLoading && userData.following.length} Following</p>
                    <p>{!isLoading && userData.followers.length} Followers</p>
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

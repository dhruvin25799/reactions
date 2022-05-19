import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import {
  Carousel,
  LoadingSpinner,
  PostList,
  ProfileSidebar,
} from "../../components/index";
import { getAllUsers } from "../../helpers/getFunctions";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsThunk } from "../../store/post-slice";

export const Home = () => {
  const [userList, setUserList] = useState([]);
  const posts = useSelector((state) => state.posts.allPosts);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.posts.status);
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const userData = await getAllUsers();
        setUserList(userData.users);
      } catch (err) {
        console.log(err);
      }
    };
    if(status==="idle"){
      dispatch(getAllPostsThunk());
    }

    sendRequest();
  }, [dispatch, status]);
  return (
    <>
      <main className={styles["home-main"]}>
        <div className={styles["home-content"]}>
          <Carousel userList={userList} />
          {status === "loading" && <LoadingSpinner />}
          <PostList posts={posts} />
        </div>
        <div className={styles["home-profile"]}>
          <ProfileSidebar />
        </div>
      </main>
    </>
  );
};

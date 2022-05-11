import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Carousel, PostList, ProfileSidebar } from "../../components/index";
import { getAllUsers } from "../../helpers/getFunctions";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/post-slice";

export const Home = () => {
  const [userList, setUserList] = useState([]);
  const posts = useSelector((state) => state.posts.allPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const userData = await getAllUsers();
        setUserList(userData.users);
      } catch (err) {
        console.log(err);
      }
    };
    dispatch(getPosts());
    sendRequest();
  }, [dispatch]);
  return (
    <>
      <main className={styles["home-main"]}>
        <div className={styles["home-content"]}>
          <Carousel userList={userList} />
          <PostList posts={posts} />
        </div>
        <div className={styles["home-profile"]}>
          <ProfileSidebar />
        </div>
      </main>
    </>
  );
};

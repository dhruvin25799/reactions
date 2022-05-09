import React from "react";
import styles from "./Home.module.css";
import { Carousel } from "../../components/Carousel/Carousel";
import { PostList } from "../../components/PostList/PostList";
import { ProfileSidebar } from "../../components/ProfileSidebar/ProfileSidebar";

export const Home = () => {
  return (
    <>
      <main className={styles["home-main"]}>
        <div className={styles["home-content"]}>
          <Carousel />
          <PostList />
        </div>
        <div className={styles["home-profile"]}>
          <ProfileSidebar />
        </div>
      </main>
    </>
  );
};

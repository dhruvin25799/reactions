import React, { useState } from "react";
import styles from "./Bookmarks.module.css";
import { PostList } from "../../components/index";
import { useSelector } from "react-redux";

const sortPosts = (data, filterState) => {
  if (filterState === "ASC") {
    return data
      .slice()
      .sort((a, b) => new Date(a["createdAt"]) - new Date(b["createdAt"]));
  }
  if (filterState === "DESC") {
    return data
      .slice()
      .sort((a, b) => new Date(b["createdAt"]) - new Date(a["createdAt"]));
  }
};

export const Bookmarks = () => {
  const bookmarkedPosts = useSelector((state) => state.auth.userData.bookmarks);
  const [filterState, setFilterState] = useState("ASC");
  const posts = sortPosts(bookmarkedPosts, filterState);
  return (
    <main className={styles["bookmarks-main"]}>
      <div className={styles["bookmarks-header"]}>
        <h3>Bookmarks</h3>
        <div>
          <label>Filter by date: </label>
          <select
            name="filterByDate"
            onChange={(e) => setFilterState(e.target.value)}
          >
            <option value="ASC">Oldest First</option>
            <option value="DESC">Latest First</option>
          </select>
        </div>
      </div>
      {bookmarkedPosts.length === 0 && (
        <h4>Your bookmarked posts will appear here!</h4>
      )}
      <div className={styles["bookmarks"]}>
        <PostList posts={posts} />
      </div>
    </main>
  );
};

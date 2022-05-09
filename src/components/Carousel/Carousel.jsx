import React, {useState, useRef} from "react";
import styles from "./Carousel.module.css";
import { Avatar } from "../Avatar/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";

export const Carousel = () => {
  const [showLeft, setShowLeft] = useState(false);
  const carouselRef = useRef();
  const carouselScrollHandler = (arrow) => {
    setShowLeft(true);
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo =
        arrow === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <>
      <div className={styles["carousel-container"]}>
        <div className={styles["carousel"]}>
          <div className={styles["carousel-row"]} ref={carouselRef}>
            <div className={styles["left-arrow"]}>
              {showLeft && (
                <FontAwesomeIcon
                  icon={faArrowAltCircleLeft}
                  onClick={() => carouselScrollHandler("left")}
                />
              )}
            </div>
            <div className={styles["right-arrow"]}>
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                onClick={() => carouselScrollHandler("right")}
              />
            </div>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </div>
        </div>
      </div>
    </>
  );
};

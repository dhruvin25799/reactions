import styles from "./Button.module.css";

export const Button = (props) => {
  return (
    <button className={styles["btn"]} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

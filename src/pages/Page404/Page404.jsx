import styles from "./Page404.module.css";
import { Button } from "../../components/index";
import { useNavigate } from "react-router-dom";

export const Page404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className={styles["page404-main"]}>
        <div>
          <h1>404</h1>
          <h3>Not Found</h3>
          <p>The page you're looking for doesn't exist</p>
          <Button onClick={() => navigate("/", { replace: true })}>
            Go back home
          </Button>
        </div>
      </main>
    </>
  );
};

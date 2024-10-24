import { Pagination } from "../pagination/Pagination";
import styles from "./cardList.module.css";

export const CardList = () => {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  );
};

import Image from "next/image";
import { Pagination } from "../pagination/Pagination";
import styles from "./cardList.module.css";
import { Card } from "../card/Card";

export const CardList = () => {
  return (
    <div className={styles.container}>
      <h1>Recent post</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

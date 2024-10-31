import Image from "next/image";
import { Pagination } from "../pagination/Pagination";
import styles from "./cardList.module.css";
import { Card } from "../card/Card";

const getData = async (page) => {
  const res = await fetch("http://localhost:3000/api/posts?page=${page}", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

export const CardList = async ({page}) => {
  const data = await getData(page);
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

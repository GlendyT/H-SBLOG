import { Pagination } from "../pagination/Pagination";
import styles from "./cardList.module.css";
import { Card } from "../card/Card";

const getData = async (page, cat) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

export const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Card key={post.id} item={post} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};


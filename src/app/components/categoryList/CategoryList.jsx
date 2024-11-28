import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";

 const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
    cache: "no-store",
  });


  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

export const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Continents</h1>
      <h2 className={styles.subtitle}>Click every box to see the stories behind</h2>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={40}
                height={40}
                className={styles.image}
              />
            )}

            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};


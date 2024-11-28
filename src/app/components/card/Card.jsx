import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {Array.isArray(item.img) && item.img.length > 0 && (
          <Image
            src={item.img[0]} // Use the first image from the array
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc.substring(0, 100)}</p>
        <Link href={`/posts/${item.slug}`} className={styles.read}>
          Read More
        </Link>
      </div>
    </div>
  );
};

import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi vel
          vero omnis ab dolorum, necessitatibus, fugiat iusto facere repellat
          culpa eum praesentium officia optio porro molestiae eos dignissimos
          accusamus nisi?
        </p>
        <Link href="/" className={styles.desc}>
          Read More
        </Link>
      </div>
    </div>
  );
};

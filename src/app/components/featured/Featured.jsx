import Image from "next/image";
import styles from "./featured.module.css";
export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hugo & Simmone</b> <span>stories around the world</span>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.textTitle}>
            Knowing the world, through our eyes
          </h1>
          <p className={styles.postDesc}>
            {" "}
            For the last few years we have travel the world, knowing beautiful
            places, with a lot of culture and kind people
          </p>
        </div>
      </div>
    </div>
  );
};

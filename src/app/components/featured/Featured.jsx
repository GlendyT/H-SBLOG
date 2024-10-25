import Image from "next/image";
import styles from "./featured.module.css";
export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>H&S</b> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.textTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            {" "}
            Pariatur impedit reprehenderit commodi nulla eum dignissimos a,
            maxime rem iure aliquam! Dicta, totam harum. Sed, dolores quia fuga
            praesentium sint illo.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

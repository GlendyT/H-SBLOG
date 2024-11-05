import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";
import CategoryItems from "../categoryList/CategoryItems";
export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="lama blog" width={50} height={50} />
          <h1>H&S</h1>
        </div>
        <p className={styles.desc}>
          Know the world, through our eyes.
        </p>
        {/* <div className={styles.icon}>
          <Image src="/facebook.png" alt="" width={18} height={16} />
          <Image src="/instagram.png" alt="" width={18} height={16} />
          <Image src="/tiktok.png" alt="" width={18} height={16} />
          <Image src="/youtube.png" alt="" width={18} height={16} />
        </div> */}
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          {/* <Link href="/">Contact</Link> */}
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Continents</span>

          <CategoryItems />
        </div>
        {/* <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div> */}
      </div>
    </div>
  );
};

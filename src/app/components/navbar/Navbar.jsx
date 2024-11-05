import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { AuthLinks } from "../authLinks/AuthLinks";
import { ThemeToggle } from "../themeToggle/ThemeToggle";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div> */}
      <Link href="/" className={styles.logo}>
        H&S
      </Link>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        {/* <Link href="/" className={styles.link}>
          Contact
        </Link> */}
        <Link href="/about" className={styles.link}>
          About
        </Link>

        {/* <AuthLinks /> */}
        <ThemeToggle />
      </div>
    </div>
  );
};

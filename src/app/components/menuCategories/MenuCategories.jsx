import Link from "next/link"
import styles from "./menuCategories.module.css"

export const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
    <Link
      href="/blog?cat=style"
      className={`${styles.categoryItem} ${styles.style}`}
    >
      Style
    </Link>
    <Link
      href="/blog?cat=style"
      className={`${styles.categoryItem} ${styles.fashion}`}
    >
      Style
    </Link>
    <Link
      href="/blog?cat=style"
      className={`${styles.categoryItem} ${styles.food}`}
    >
      Style
    </Link>
    <Link
      href="/blog?cat=style"
      className={`${styles.categoryItem} ${styles.travel}`}
    >
      Style
    </Link>
    <Link
      href="/blog?cat=style"
      className={`${styles.categoryItem} ${styles.culture}`}
    >
      Style
    </Link>
    <Link
      href="/blog?cat=style"
      className={`${styles.categoryItem} ${styles.coding}`}
    >
      Style
    </Link>
  </div>
  )
}

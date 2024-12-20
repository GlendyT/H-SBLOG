import styles from "./menu.module.css";
import { MenuPosts } from "../menuPosts/MenuPosts";
import { MenuCategories } from "../menuCategories/MenuCategories";

export const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}> What´s hot</h2>
      <h1 className={styles.title}> Most Popular</h1>
      <MenuPosts withImage={false} />

      <h2 className={styles.subtitle}> Discover by topic</h2>
      <h1 className={styles.title}> Cateogories</h1>
      <MenuCategories />

      <h2 className={styles.subtitle}> Chosen by Editor</h2>
      <h1 className={styles.title}> Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

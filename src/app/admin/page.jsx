import { AuthLinks } from "../components/authLinks/AuthLinks";
import styles from "./admin.module.css"

const Admin = () => {
  return (
    <div className={styles.container}>
      <AuthLinks />
    </div>
  );
};

export default Admin;

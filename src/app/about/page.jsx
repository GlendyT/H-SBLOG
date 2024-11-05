import Image from "next/image";
import styles from "./about.module.css";
import about from "../../../public/travel.png";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          sequi aliquam, animi porro voluptates repellat similique temporibus
          eum? Fugiat nesciunt facere tenetur autem rem assumenda aperiam
          facilis at harum dignissimos!
        </p>
        <Image src={about} alt="" className={styles.image} />
      </div>
    </div>
  );
};

export default About;

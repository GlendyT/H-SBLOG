import Image from "next/image";
import styles from "./about.module.css";
import about from "../../../public/travel.png";

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const About = async () => {
  const data = await getData();
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

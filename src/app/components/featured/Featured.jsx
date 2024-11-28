import styles from "./featured.module.css";

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

export const Featured = async () => {
  const data = await getData();

  return (
    <>
      {data?.map((item) => {
        const { images, title, content, id } = item;

        return (
          <div key={id} className={styles.container}                 style={{
            backgroundImage: `url(${images[1]})`,
            backgroundSize: "cover",
          }}>
            <div className={styles.overlay}></div>
            <div className={styles.title}>
              <h1
                className={styles.title1}
                style={{
                  backgroundImage: `url(${images[0]})`,
                  backgroundSize: "cover",
                  backgroundPositionY: "center",
                  backgroundClip: "text",
                }}
              >
                {title}
              </h1>{" "}
              <span>{content}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

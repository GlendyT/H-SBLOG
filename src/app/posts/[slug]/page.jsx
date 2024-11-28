import Image from "next/image";
import styles from "./singlePage.module.css";

const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              {data?.user?.image && (
                <Image
                  src={data.user.image}
                  alt="User Avatar"
                  fill
                  className={styles.avatar}
                />
              )}
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>
                {data?.user.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.paragraph}>
        <div className={styles.imageContainer}>
          {Array.isArray(data?.img) &&
            data.img.map((image, id) => (
              <div key={id} className={styles.singleImageWrapper}>
                <Image
                  src={image}
                  alt={`Image ${id + 1}`}
                  width={400}
                  height={200}
                  className={styles.image}
                />
              </div>
            ))}
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: data?.desc }}
            />
          </div>
        </div>
        <div className={styles.imageContainer}>
          {Array.isArray(data?.img) &&
            data.img.map((image, id) => (
              <div key={id} className={styles.singleImageWrapper}>
                <Image
                  src={image}
                  alt={`Image ${id + 1}`}
                  width={400}
                  height={200}
                  className={styles.image}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

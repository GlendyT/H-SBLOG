import Link from "next/link";
import styles from "./categoryList.module.css";


const getData = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed");
    }
    return res.json();
  };

const CategoryItems = async () => {
    const data = await getData();
  return (
    <>
      {data?.map((item) => (
        <Link
          href={`/blog?cat=${item.slug}`}
          className={` ${styles[item.slug]}`}
          key={item._id}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
};

export default CategoryItems;

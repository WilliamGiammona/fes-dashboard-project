import styles from "./menuLink.module.css";
import Link from "next/link";

const MenuLink = ({ listItem }: any) => {
  return (
    <>
      <Link href={listItem.path} className={styles.container}>
        {listItem.icon}
        {listItem.title}
      </Link>
    </>
  );
};

export default MenuLink;

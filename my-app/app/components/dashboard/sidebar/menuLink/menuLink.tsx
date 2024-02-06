"use client";
import styles from "./menuLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ listItem }: any) => {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={listItem.path}
        className={`${styles.container} ${
          pathname === listItem.path && styles.active
        }`}
      >
        {listItem.icon}
        {listItem.title}
      </Link>
    </>
  );
};

export default MenuLink;

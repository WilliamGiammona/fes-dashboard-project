"use client";

import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return <div className={styles.container}>Navbar</div>;
};

export default Navbar;

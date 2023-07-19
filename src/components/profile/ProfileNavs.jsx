import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GiBoxUnpacking } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import styles from "./ProfileNavs.module.css";

const ProfileNavs = () => {
  return (
    <aside className={styles["navs__container"]}>
      <ul className={styles.navs}>
        <li>
          <p className={styles.icons}>
            <AiOutlineUser />
          </p>
          <p>My Account</p>
        </li>
        <li>
          <p className={styles.icons}>
            <GiBoxUnpacking />
          </p>
          <p>Orders</p>
        </li>
        <li>
          <p className={styles.icons}>
            <MdFavoriteBorder />
          </p>
          <p>Favorites</p>
        </li>
      </ul>
      <ul className={styles.navs}>
        <li>Account Management</li>
        <li>Adress Book</li>
      </ul>
      <button className={styles["logout__btn"]}>Logout</button>
    </aside>
  );
};

export default ProfileNavs;

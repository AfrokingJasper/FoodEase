import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GiBoxUnpacking } from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { authAction } from "../../store/auth-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileNavs.module.css";

const ProfileNavs = ({ onSetActiveNav, activeNav }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logouthandler = () => {
    dispatch(authAction.logout());
    navigate("/");
  };

  return (
    <aside className={styles["navs__container"]}>
      <ul className={styles.navs}>
        <li
          onClick={() => onSetActiveNav("account")}
          className={activeNav === "account" ? styles.active : ""}
        >
          <p className={styles.icons}>
            <AiOutlineUser />
          </p>
          <p>My Account</p>
        </li>
        <li
          onClick={() => onSetActiveNav("orders")}
          className={activeNav === "orders" ? styles.active : ""}
        >
          <p className={styles.icons}>
            <GiBoxUnpacking />
          </p>
          <p>Orders</p>
        </li>
        <li
          onClick={() => onSetActiveNav("favorites")}
          className={activeNav === "favorites" ? styles.active : ""}
        >
          <p className={styles.icons}>
            <MdFavoriteBorder />
          </p>
          <p>Favorites</p>
        </li>
      </ul>
      <ul className={styles.navs}>
        <li
          onClick={() => onSetActiveNav("management")}
          className={activeNav === "management" ? styles.active : ""}
        >
          Account Management
        </li>
        <li
          onClick={() => onSetActiveNav("address")}
          className={activeNav === "address" ? styles.active : ""}
        >
          Adress Book
        </li>
      </ul>
      <button onClick={logouthandler} className={styles["logout__btn"]}>
        Logout
      </button>
    </aside>
  );
};

export default ProfileNavs;

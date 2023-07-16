import React, { Fragment } from "react";
import styles from "./Header.module.css";
import { FaBowlFood } from "react-icons/fa6";
import { useSelector } from "react-redux";
import DesktopNavs from "./DesktopNavs";
import MobileNavs from "./MobileNavs";

const Header = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h2>FOODEASE</h2>
          <span>
            <FaBowlFood />
          </span>
        </div>

        {/* navigations for laptop/deskyop screen */}
        <DesktopNavs cartQuantity={cartQuantity} />
      </header>

      {/* navigations for mobile screen */}
      <MobileNavs cartQuantity={cartQuantity} />
    </Fragment>
  );
};

export default Header;

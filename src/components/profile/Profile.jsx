import React, { useState } from "react";
import styles from "./Profile.module.css";
import ProfileNavs from "./ProfileNavs";
import ProfileDetails from "./profileDetails/ProfileDetails";

const Profile = () => {
  const [activeNav, setActiveNav] = useState("account");

  const setActiveNavHandler = (nav) => {
    setActiveNav(nav);
  };

  return (
    <section className={styles["profile__section"]}>
      <ProfileNavs onSetActiveNav={setActiveNavHandler} activeNav={activeNav} />
      <ProfileDetails activeNav={activeNav} />
    </section>
  );
};

export default Profile;

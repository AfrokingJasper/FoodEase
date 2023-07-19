import React from "react";
import styles from "./Profile.module.css";
import ProfileNavs from "./ProfileNavs";
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
  return (
    <section className={styles["profile__section"]}>
      <ProfileNavs />
      <ProfileDetails />
    </section>
  );
};

export default Profile;

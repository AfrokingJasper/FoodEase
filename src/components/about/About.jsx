import React from "react";

// importiing styles
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles["about__section"]}>
      <h2 className={styles["about__header"]}>About FOODEASE</h2>
      <div className={styles["about__content"]}>
        <p>
          At Foodease, we are passionate about providing you with a seamless and
          delightful food ordering experience. Our mission is to make your
          dining adventures effortless, enjoyable, and oh-so-delicious!
        </p>
        <div>
          <h4>Who We Are:</h4>
          <p>
            Foodease is a cutting-edge web app designed to cater to your
            culinary cravings. We have handpicked the finest eateries and
            restaurants to offer you a diverse selection of mouthwatering
            dishes, all available at your fingertips.
          </p>
        </div>
        <div>
          <h4>Our Vision:</h4>
          <p>
            Our vision is to revolutionize the way you enjoy food. With
            Foodease, you can explore an extensive menu, discover new flavors,
            and place orders from the comfort of your home or on-the-go. We
            strive to bring convenience and culinary excellence together in one
            place.
          </p>
        </div>
        <div>
          <h4>How It Works:</h4>
          <p>
            Navigating Foodease is a breeze. Simply browse through our curated
            list of restaurants, peruse their menus, and add your favorite
            dishes to the cart. Customize your order to your heart's content,
            and with a few taps or clicks, you're done! We'll take care of the
            rest, ensuring your order is delivered fresh and piping hot to your
            doorstep.
          </p>
        </div>
        <div>
          <h4>Why Choose Foodease:</h4>
          <ul>
            <li>
              Extensive Restaurant Selection: We've partnered with the best
              local eateries to offer you an array of cuisines, from comforting
              classics to exotic delights.
            </li>
            <li>
              User-Friendly Interface: Our app is designed to be intuitive,
              making your food ordering experience enjoyable and stress-free.
            </li>
            <li>
              Secure and Seamless Transactions: Your safety is paramount to us.
              Rest assured, your payments are handled securely, making every
              transaction hassle-free.
            </li>
            <li>
              Timely Delivery: We understand the value of your time. Our
              delivery partners are committed to bringing your food promptly, so
              you can savor every moment.
            </li>
          </ul>
        </div>

        <div>
          <h4>Join the Foodease Community:</h4>
          <p>
            Sign up and Become part of the Foodease family and indulge in
            gastronomic delights. Let us handle your cravings, while you focus
            on creating memorable moments around the table.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

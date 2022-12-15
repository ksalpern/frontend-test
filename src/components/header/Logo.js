import React from "react";
import styles from "./Logo.module.scss";

import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import Rootz from "../../assets/Rootz.svg";

const Logo = () => {
    return (
        <div className={styles.logo__wrapper}>
            <div className={styles.logoImg}>
                <img className={`${styles.logoImg__item} ${styles.item1}`} src={logo1} alt="" />
                <img className={`${styles.logoImg__item} ${styles.item2}`} src={logo2} alt="" />
                <img className={`${styles.logoImg__item} ${styles.item3}`} src={logo3} alt="" />
            </div>
            <div className={styles.logoName}>

            </div>
        </div>
    );
};

export default Logo;

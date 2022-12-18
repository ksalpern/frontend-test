import React, { useState } from "react";
import styles from "./Banner.module.scss";

import headline from "../../../assets/Headline.svg";
import location from "../../../assets/find.svg";
import cardIcon from "../../../assets/card-icon.svg";
import Parrot from "../../../assets/Parrot2.svg";
import eye from "../../../assets/eye.svg";
import par1 from "../../../assets/par1.svg";
import par2 from "../../../assets/par2.svg";
import par3 from "../../../assets/par3.svg";
import par4 from "../../../assets/par4.svg";
import par5 from "../../../assets/par5.svg";

const Banner = () => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.bannerLeft}>
          <div className={styles.bannerLeft__img}>
            <img src={headline} alt="" />
          </div>
          <p>
            The scale of the challenges facing our planet can seem daunting, but
            we can all do something.
          </p>
          <form
            className={styles.search}
            action="#"
            method="post"
            encType="multipart/form-data"
          >
            <img src={location} alt="" />
            <input
              type="text"
              placeholder="Find the place to help"
              value={search}
              onChange={handleInput}
            />
            <button className="btn" type="submit">
              SEARCH
            </button>
          </form>
        </div>

        <div className={styles.bannerRight}>
          <div className={styles.banner__card}>
            <img src={cardIcon} alt="" />
            <div className={styles.card__content}>
              <p>Members</p>
              <span>29 128</span>
            </div>
          </div>
          <div className={styles.bird}>
            <img className={styles.parrot} src={Parrot} alt="" />
            <img className={styles.eye} src={eye} alt="" />
            <img className={`${styles.par1} ${styles.par}`} src={par1} alt="" />
            <img className={`${styles.par2} ${styles.par}`} src={par2} alt="" />
            <img className={`${styles.par3} ${styles.par}`} src={par3} alt="" />
            <img className={`${styles.par4} ${styles.par}`} src={par4} alt="" />
            <img className={`${styles.par5} ${styles.par}`} src={par5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

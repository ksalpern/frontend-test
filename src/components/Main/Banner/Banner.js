import React, { useState } from 'react'
import styles from './Banner.module.scss'

import headline from '../../../assets/Headline.svg'
import location from '../../../assets/find.svg'

import cardIcon from '../../../assets/card-icon.svg'


const Banner = () => {
    const [search, setSearch] = useState('')

const handleInput = (e) => {
    setSearch(e.target.value)
    console.log(search)
}

    return (
        <div className={styles.banner}>
            <div className={styles.bannerLeft}>
                <div className={styles.bannerLeft__img}>
                    <img src={headline} alt="" />
                </div>
                <p>The scale of the challenges facing our planet can seem daunting, but we can all do something.</p>
                <form className={styles.search} action="#" method="post" encType="multipart/form-data">
                    <img src={location} alt="" />
                    <input type="text" placeholder='Find the place to help' value={search} onChange={handleInput}/>
                    <button className="btn" type='submit'>SEARCH</button>
                </form>
            </div>

            <div className={styles.bannerRight}>
                <div className={styles.banner__card}>
                    <img src={cardIcon} />
                    <div className={styles.card__content}>
                        <p>Members</p>
                        <span>29 128</span>
                    </div>

                </div>
                <div className={styles.bird}></div>
            </div>
        </div>
    )
}

export default Banner
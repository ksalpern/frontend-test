import React from 'react'
import './Team.scss'
import team1 from '../../../assets/img1.jpg'
import team2 from '../../../assets/img2.jpg'
import team3 from '../../../assets/img3.jpg'

const Team = () => {
    return (
        <div className='team'>
            <h2>Our top team</h2>
            <p>Learn more about how you can save our planet's nature.</p>

            <ul className="team__people">
                <li className='team__item team__item1'>
                    <img src={team1} alt="" />
                </li>
                <li className='team__item team__item2'>
                    <img src={team2} alt="" />
                </li>
                <li className='team__item team__item3'>
                    <img src={team3} alt="" />
                </li>
            </ul>
        </div>
    )
}

export default Team
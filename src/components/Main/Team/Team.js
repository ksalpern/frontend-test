import React from "react";
import "./Team.scss";
import team1 from "../../../assets/img1.png";
import team2 from "../../../assets/img2.png";
import team3 from "../../../assets/img3.png";

const Team = () => {
    //     <svg width="323" height="274" viewBox="0 0 323 274" fill={`url(${team1})`} xmlns="http://www.w3.org/2000/svg">
    //     <path fill-rule="evenodd" clip-rule="evenodd" d="M164.482 3.59734C203.98 5.33709 245.873 2.74805 275.809 28.5519C307.481 55.8526 326.454 98.1799 322.476 139.785C318.746 178.801 286.283 206.236 256.396 231.621C229.672 254.318 199.548 273.238 164.482 273.975C128.7 274.727 96.2638 258.278 68.618 235.568C37.2374 209.789 5.90412 180.094 1.1304 139.785C-4.10459 95.5802 8.68033 46.8107 42.8869 18.2924C75.4748 -8.87639 122.081 1.72969 164.482 3.59734Z"  fill={`url(${team1})`}  />
    // </svg>
    return (
        <div className="team">
            <h2>Our top team</h2>
            <p>Learn more about how you can save our planet's nature.</p>

            <ul className="team__people">
                <li className="team__item team__item1">
                    <img src={team1} alt="" />
                </li>
                <li className="team__item team__item2">
                    <img src={team2} alt="" />
                </li>
                <li className="team__item team__item3">
                    <img src={team3} alt="" />
                </li>
            </ul>
        </div>
    );
};

export default Team;

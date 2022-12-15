import React from "react";
import "./Footer.scss";
import tweet from "../../assets/tweet.svg";
import facebook from "../../assets/fаcebook.svg";
import linkdin from "../../assets/in.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="contacts footer__column">
                    <h4>Contacts</h4>
                    <p>2019 Rootz Foundation. All rights reserved</p>
                </div>
                <div className="adress footer__column">
                    <h5>Headquarters</h5>
                    <p>1234 Taliban </p>
                    <p>Los Angeles, La 1234567</p>
                    <p>(123) 456-7890</p>
                </div>
                <div className="social footer__column">
                    <h5>Social media</h5>
                    <ul>
                        <li>
                            <a href="#">
                                <img src={tweet} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={facebook} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={linkdin} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

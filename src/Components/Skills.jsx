import React from 'react'
import "../Style/Skills.css"
import Marquee from "react-fast-marquee";

export default function Skills() {
    return (
        <div className="skills" data-aos="fade-up" data-aos-duration="1000">
            <h1>Skills</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, perspiciatis.</p>
            <div className="front-flex">
                <Marquee
                    speed={50}
                    pauseOnClick={true}
                >
                    <img src="./img/html-icon.png" alt="" />
                    <img src="./img/css-icon.png" alt="" />
                    <img src="./img/js-icon.png" alt="" />
                    <img src="./img/react_logo.png" alt="" />
                    <img src="./img/boostrap.png" alt="" />
                    <img src="./img/tw-icon.png" alt="" />
                    <img src="./img/kotlin_logo.png" alt="" />
                    <img src="./img/flutter_logo.png" alt="" />
                    <img src="./img/cs-icon.png" alt="" />
                    <img src="./img/cpp-icon.png" alt="" />
                    <img src="./img/nodejs_logo.png" alt="" />
                    <img src="./img/php-icon.png" alt="" />
                    <img src="./img/spb-icon.png" alt="" />
                    <img src="./img/py-icon.png" alt="" />
                    <img src="./img/mongodb_logo.png" alt="" />
                    <img src="./img/sql_logo.png" alt="" />
                </Marquee>
            </div>

        </div>
    )
}

import React from 'react'
import "../Style/About.css"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion'

export default function About() {
    return (
        <div className="about" data-aos="fade-up" data-aos-duration="1000">
            <div className="about-flex">
                <div className="about-img">
                    <div className="about-align">
                        <motion.div className="exp-box"
                            initial={{ x: 50 }}
                            whileInView={{ x: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                {({ isVisible }) => (
                                    <div className="exp-detail">
                                        <img src="./img/exp-icon.png" alt="" />
                                        <div className="exp-text">
                                            {isVisible ? <CountUp end={2} /> : null}
                                            <h5>Year Experience </h5>
                                        </div>
                                    </div>
                                )}
                            </VisibilitySensor>
                        </motion.div>
                        <motion.div className="client-box"
                            initial={{ x: -50 }}
                            whileInView={{ x: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                {({ isVisible }) => (
                                    <div className="client-detail">
                                        <img src="./img/client-icon.png" alt="" />
                                        <div className="client-text">
                                            {isVisible ? <CountUp end={16} /> : null}
                                            <h5>Happy Client</h5>
                                        </div>
                                    </div>
                                )}
                            </VisibilitySensor>
                        </motion.div>
                        <motion.div className="work-box"
                            initial={{ x: 50 }}
                            whileInView={{ x: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                {({ isVisible }) => (
                                    <div className='work-detail'>
                                        <img src="./img/cpj-icon.png" alt="" />
                                        <div className="work-text">
                                            {isVisible ? <CountUp end={26} /> : null}
                                            <h5>Complete Project</h5>
                                        </div>
                                    </div>
                                )}
                            </VisibilitySensor>
                        </motion.div>
                        <img src="./img/about-img.png" alt="" />
                    </div>
                </div>
                <div className="about-text">
                    <div className="text">
                        <h1>About Me</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dolorem, libero iure, nemo cum amet tempora laboriosam vitae quibusdam deleniti eius laudantium nobis, incidunt quod labore? Labore, facilis quis. Repudiandae.</p>
                        <motion.div className="flex-box"
                            initial={{ y: 50 }}
                            whileInView={{ y: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <div className="address1">
                                <p>
                                    Name: <span> Nattanon Moontip </span><br />
                                    Nickname: <span>Por</span> <br />
                                    Birtday: <span>11 September 2000</span>
                                </p>
                            </div>
                            <div className="address2">
                                <p>
                                    Email: <span>opor-2543@hotmail.com</span> <br />
                                    Phone: <span>+66 83 473 3036</span> <br />
                                    Address: <span>12/79 Moo. 1 , Klongsong , Klongluang , Pathumthani 12120</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div >
        </div >
    )
}

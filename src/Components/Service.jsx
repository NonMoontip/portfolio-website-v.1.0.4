import React from 'react'
import "../Style/Service.css"
import { motion } from 'framer-motion'

export default function Service() {
    return (
        <div className="service" id='service'>
            <h1>Service</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, laborum.</p>
            <div className="row-flex">
                <motion.div className="service-box"
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <div className="img-area">
                        <img src="./img/ux-ui.png" alt="" />
                    </div>
                    <div className="text-area">
                        <h5>UX-UI Design</h5>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repudiandae.
                        </p>
                    </div>
                </motion.div>
                <motion.div className="service-box"
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <div className="img-area">
                        <img src="/img/web-dev.png" alt="" />
                    </div>
                    <div className="text-area">
                        <h5>Web Developer</h5>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repudiandae.
                        </p>
                    </div>
                </motion.div>
                <motion.div className="service-box"
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <div className="img-area">
                        <img src="./img/programming.png" alt="" />
                    </div>
                    <div className="text-area">
                        <h5>Programming</h5>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repudiandae.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

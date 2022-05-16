import "../Style/Home.css"
import { motion } from 'framer-motion'


export default function Home() {
    return (
        <div className="home" data-aos="fade-up" data-aos-duration="1000">
            <div className="container-flex">
                <div className="text-box">
                    <div className="text">
                        <h1>NONDEV</h1>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptates?</h5>
                    </div>
                </div>
                <div className="img-box">
                    <div className="img-align">
                        <img src="./img/home-img.png" alt="" />
                        <div className="box1"><img src="./img/react_logo.png" alt="" /></div>
                        <div className="box2"><img src="./img/html-icon.png" alt="" /></div>
                        <div className="box3"><img src="./img/css-icon.png" alt="" /></div>
                        <div className="box4"><img src="./img/js-icon.png" alt="" /></div>
                        <motion.div className="circle1"
                            initial={{ x: -100 }}
                            whileInView={{ x: -20 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        ><img src="./img/human.png" alt="" /><h5>Hi my name is Nattanon</h5></motion.div>
                        <motion.div className="circle2"
                            initial={{ x: 100 }}
                            whileInView={{ x: 20 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        ><img src="./img/frontend-dev.png" alt="" /><h5>Frontend Developer</h5></motion.div>
                    </div>
                </div>
            </div>
        </div >
    )
}

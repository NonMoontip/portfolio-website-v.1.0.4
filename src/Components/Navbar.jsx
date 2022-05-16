import { Link } from 'react-scroll'
import "../Style/Navbar.css"


export default function Navbar() {

    return (
        <header>
            <div className="logo"><img src="./img/Nondev_logo.png" alt="" /></div>
            <ul>
                <li> <Link activeClass="active" to="home" spy={true} smooth={true} offset={-150} >Home</Link></li>
                <li> <Link to="service" spy={true} smooth={true} offset={-100} >Service</Link></li>
                <li> <Link to="about" spy={true} smooth={true} offset={-90} >About Me</Link></li>
                <li> <Link to="skills" spy={true} smooth={true} offset={-100} >Skills</Link></li>
                <li> <Link to="portfolio" spy={true} smooth={true} offset={0} >Portfolio</Link></li>
                <li> <Link to="contact" spy={true} smooth={true} offset={0} >Contact</Link></li>
            </ul>
        </header>
    )
}

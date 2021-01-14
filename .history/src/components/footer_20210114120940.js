import React from "react"
import $ from "jquery/dist/jquery"
//import IGICON from "../components/i-ig"
import FooterStyle from "../styles/components/footer.module.scss"
import { FaFacebook, FaInstagram, FaLinkedin , FaYoutube, FaTwitter} from 'react-icons/fa'

class Footer extends React.Component {

    componentDidMount() {
        //const footer = $('footer');
        const dateFooter = $('#footer-date');
        const now = new Date();
        dateFooter.html(now.getFullYear());

    }

    render() {
        return(
            <footer>
                <div id={FooterStyle.footer}>
                    <div className={FooterStyle.container}>
                        <p className={FooterStyle.copyRight}>Created by Alex Caires, all rights reserved <span id="footer-date">2020</span></p>
                    </div>
                <nav className={FooterStyle.social}>
                    <li className={FooterStyle.icon}><FaFacebook /></li>
                    <li className={FooterStyle.icon}><FaInstagram /></li>
                    <li className={FooterStyle.icon}><FaTwitter /></li>
                    <li className={FooterStyle.icon}><FaLinkedin /></li>
                    <li className={FooterStyle.icon}><Fa /></li>
                    <li className={FooterStyle.icon}><FaFacebook /></li>
                </nav>
                </div>
            </footer>
        )
    }

}

// const Footer = () => {
//   return <footer><h1>This is the footer</h1></footer>
// }

export default Footer
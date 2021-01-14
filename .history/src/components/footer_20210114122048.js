import React from "react"
import $ from "jquery/dist/jquery"
//import IGICON from "../components/i-ig"
import FooterStyle from "../styles/components/footer.module.scss"
import { Link } from "gatsby";
import { FaFacebook, FaInstagram, FaLinkedin , FaYoutube, FaTwitter, FaGithub} from 'react-icons/fa'

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
                    <Link className={FooterStyle.icon} to="//www.google.com" target><FaFacebook /></Link>
                    <li className={FooterStyle.icon}><FaInstagram /></li>
                    <li className={FooterStyle.icon}><FaTwitter /></li>
                    <li className={FooterStyle.icon} href="//www.twitter.com" target="_blank" aria-label="Twitter"><FaLinkedin /></li>
                    <li className={FooterStyle.icon}><FaYoutube /></li>
                    <li className={FooterStyle.icon}><FaGithub /></li>
                </nav>
                </div>
            </footer>
        )
    }

}



export default Footer
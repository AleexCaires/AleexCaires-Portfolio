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
                    <Link className={FooterStyle.icon} to="//www.facebook.com/alex.caires.98/" target="_blank" aria-label="Facebook"><FaFacebook /></Link>
                    <Link className={FooterStyle.icon} to="/https://www.instagram.com/tiiagoaleex/" target="_blank" aria-label="Instagram"><FaInstagram /></Link>
                    <Link className={FooterStyle.icon} to="//www.facebook.com/alex.caires.98/" target="_blank" aria-label="Twitter"><FaTwitter /></Link>
                    <Link className={FooterStyle.icon} to="//www.facebook.com/alex.caires.98/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></Link>
                    <Link className={FooterStyle.icon} to="//www.facebook.com/alex.caires.98/" target="_blank" aria-label="GitHub"><FaGithub /></Link>
                    <Link className={FooterStyle.icon} to="//www.facebook.com/alex.caires.98/" target="_blank" aria-label="Youtube"><FaYoutube /></Link>
                    
                </nav>
                </div>
            </footer>
        )
    }

}



export default Footer
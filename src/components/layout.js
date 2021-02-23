import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import layoutStyles from '../styles/components/layout.module.scss';
import Contact from "../components/contact"


const Layout = (props) => (
    <section className={layoutStyles.siteContainer}>
        <Header />
        <section className={layoutStyles.contentContainer} >
            {props.children}  
        </section>
        <Footer />
    </section>
)

export default Layout
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import layoutStyles from '../styles/components/layout.module.scss';
import hero from '../styles/components/hero.module.scss'

const Layout = (props) => (
    <section className={layoutStyles.siteContainer}>
        <Header />
        <div className={layoutStyles.line}></div>
        <section className={layoutStyles.contentContainer} >
            {props.children}
            <div id={layoutStyles.hero}>
                <div className={layoutStyles.inner}>
                    <h1>Hello,</h1>
                    <p>I am <span>Tiago Caires</span> a <br></br><span>Web developer</span> from <span>London</span></p>
                    <a class="btn" href="https://google.com" target="_blank">Learn More</a>
                </div>
            </div>
            <div id={layoutStyles.main}>
                <h1>About me</h1>
                <div className={layoutStyles.inner}>
                    <div className={layoutStyles.mainItem}>
                    <img src="https://picsum.photos/251/300" alt="main-pic" />
                <div className ={layoutStyles.text}>  
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div> 
                    </div>    
                </div>
            </div>     
           
            
        </section>
        <Footer />
    </section>
)

export default Layout
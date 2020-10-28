import React from "react"
import AboutStyles from '../styles/components/about.module.scss';
import images from '../images/avatar..jpg'


const About = () => (
<div id={AboutStyles.main}>
    <h1>About me</h1>
    <div className={AboutStyles.inner}>
        <div className={AboutStyles.mainItem}>
        <img src={images} alt="Avatar" />

            <div className ={AboutStyles.text}>  
                <p>Hello my name is Tiago Caires, i am 22 Years old, originaly from Portugal, Madeira Island  </p>
            </div> 
        </div>    
    </div>
</div>  

)


export default About
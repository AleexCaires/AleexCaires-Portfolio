import React from "react"
import AboutStyles from '../styles/components/about.module.scss';


const About = () => (
<div id={AboutStyles.main}>
    <h1>About me</h1>
    <div className={AboutStyles.inner}>
        <div className={AboutStyles.mainItem}>
            <img src="https://picsum.photos/251/300" alt="main-pic" />
            <div className ={AboutStyles.text}>  
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div> 
        </div>    
    </div>
</div>  

)


export default About
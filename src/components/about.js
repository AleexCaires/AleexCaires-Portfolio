import React from "react"
import AboutStyles from '../styles/components/about.module.scss';
import images from '../images/avatar..jpg'


const About = () => (
  <div id={AboutStyles.main}>
    <h1>About me</h1>
    <div className={AboutStyles.inner}>
      <div className={AboutStyles.mainItem}>
        <img src={images} alt="Avatar" />

        <div className={AboutStyles.text}>
          <p>
            Name: Tiago Caires
            </p>
            <p>Date of Birth: February 16, 1998</p>
            <p>
            Hello my name is Tiago Caires, i am 22 Years old, originally from
            Portugal, Madeira Island, where i studied Science and Technology, to the United Kingdom where i started learning and dived into programming since 2018.
          </p>
        </div>
      </div>
    </div>
  </div>
)


export default About


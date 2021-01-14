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
          <p color_>
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

// // A small river named Duden flows by their place and supplies it with the necessary regelialia.

// Name:
// Ronaldo Fredrickson
// Date of birth:
// November 28, 1989
// Address:
// San Francisco CA 97987 USA
// Zip code:
// 1000
// Email:
// ronaldo@gmail.com
// Phone:
// +1-2234-5678-9-0
// 120 Project complete


// // 
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
            <p>My name is <strong>Tiago Caires,</strong> i am 22 Years old, originally from
            Portugal, Madeira Island, where i studied Science and Technology, to the United Kingdom where i started learning and dived into programming since 2018.
          </p>
          <h3>Experience</h3>
          <p>Worked for a few small projects for some local companies and agencies such as <b>Collider</b>, as a <b>Freelancer</b> where I had the opportunity to help
            build and delivery websites and banner adds for their key clients such as <b>Sharp</b>, <b>AstraZeneca</b> and <b>Lyxor ETF</b>.</p>
            <h3>Hobbies</h3>
            <p>Progamming is not my only passion i also like to do Exercise, Nature Walks, Mountain biking and <b><a title="Twitch Channel" href="https://www.twitch.tv/alexigurtes" target="_blank" rel="noopener noreferrer">Gaming</a></b> </p>
            <p>If you want to know more about me, send me a message in the contact form bellow.</p>
        </div>
      </div>
    </div>
  </div>
)


export default About


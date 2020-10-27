import React from 'react'
import HeroStyles from "../styles/components/hero.module.scss"

const Hero = () =>(
    <div id={HeroStyles.hero}>
        <div className={HeroStyles.inner}>
            <h1>Hello,</h1>
            <p>I am <span>Tiago Caires</span> a <br></br><span>Web developer</span> from <span>London</span></p>
            <a class="btn" href="https://google.com" target="_blank" rel="noreferrer">Learn More</a>
        </div>
    </div>
)

export default Hero 
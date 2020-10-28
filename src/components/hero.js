import React from 'react'
import HeroStyles from "../styles/components/hero.module.scss"


class Hero extends React.Component {

    componentDidMount() {
        var text = document.getElementById('text');
        var word = text.getElementsByTagName('span');
        var i = 0;

        function rotator(){
	        word[i].style.display= 'none';
	        i = (i + 1) % word.length;
	        word[i].style.display = 'initial';
}
setInterval(rotator, 1500);
    }

        render() {
            return(
    <div id={HeroStyles.hero}>
        <div className={HeroStyles.inner}>
            <h1>Hello,</h1>
            <h2 id="text">I am Tiago Caires a <br></br>
                <span>Web Developer</span>
	            <span>Front End Developer</span>
                <span>Banner Developer</span>
	            <span>Freelancer</span> &#8287;from London.
            </h2>
            <a class="btn" href="https://google.com" target="_blank" rel="noreferrer">Learn More</a>
        </div>
    </div>
            )
        }
}
export default Hero 
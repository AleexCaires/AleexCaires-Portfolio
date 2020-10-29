import React from 'react'
import HeroStyles from "../styles/components/hero.module.scss"


class Hero extends React.Component {

    componentDidMount() {
        const phrases = ["Web Developer", "Front End Developer","Technology Lover", "Aspiring Fullstack Developer", "Freelancer"];
        const text = document.getElementById('text');
        let word = 0;
        let letter = 0;
        // Direction true writes a new word
        // Direction false erases existing word
        let direction = false;

        function changeWord(){
            word > (phrases.length - 1) ? word = 0 : //null ;
            text.innerText = phrases[word].slice(0, -(phrases[word].length - 1));
        }

        function wordAnimation() {

            setTimeout(()=>{
                if (direction) {
                    if ( letter <= phrases[word].length ) {
                        if ( letter !== 0 ) {
                            //console.log(phrases[word].slice(0, letter));
                            text.innerText = String(phrases[word]).slice(0, letter);
                        }
                        letter++;
                        wordAnimation();
                    } else {
                        letter = 0;
                        direction = false;
                        wordAnimation();
                    }
                } else {
                    if ( letter <= phrases[word].length ) {
                        if ( letter !== 0 ) {
                            //console.log(phrases[word].slice(0, letter));
                            text.innerText = String(phrases[word]).slice(0, -letter);
                        }
                        letter++;
                        wordAnimation();
                    } else {
                        word++;
                        letter = 0;
                        changeWord();
                        direction = true;
                        wordAnimation();
                    }
                }
            }, 200);

        }

        wordAnimation();

    }

        render() {
            return(
                <div id={HeroStyles.hero}>
                    <div className={HeroStyles.inner}>
                        <h1>Hello,</h1>
                        <h2>I am Tiago Caires a<br/><span id="text">Web Developer</span> from London.</h2>
                        <a className="btn" href="https://google.com" target="_blank" rel="noreferrer">Learn More</a>
                    </div>
                    <span className={[HeroStyles.circle, HeroStyles.circle1].join(' ')}></span>
                    <span className={[HeroStyles.circle, HeroStyles.circle2].join(' ')}></span>
                    <span className={[HeroStyles.circle, HeroStyles.circle3].join(' ')}></span>
                    <span className={[HeroStyles.circle, HeroStyles.circle4].join(' ')}></span>
                    <span className={[HeroStyles.circle, HeroStyles.circle5].join(' ')}></span>
                </div>
            )
        }
}
export default Hero 
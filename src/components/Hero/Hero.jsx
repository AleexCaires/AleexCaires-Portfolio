import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';



const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
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
      }, 250);

  }

  wordAnimation();

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" >
      <div className="background-image"></div>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <div className="inner">
          <h1 className="hero-title">Hello, </h1>
          <h2>I am Tiago Caires a<br/><span id="text">Web Developer</span> from London.</h2>
          </div>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'About me'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;

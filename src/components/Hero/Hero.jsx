import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Typewriter from 'typewriter-effect';



const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
const phrases = ["Web Developer", "Front End Developer","Technology Lover", "Aspiring Fullstack Developer", "Freelancer"];


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
        <div id="hero">
                    <div className="inner">
                        <h1>Hello,</h1>
                        <h2>I am Tiago Caires a<br/>
                          <span>
                          <Typewriter
                            options={{
                              strings: ["Web Developer", "Front End Developer","Technology Lover", "Freelancer"],
                              autoStart: true,
                              loop: true,
                              delay: 175,
                            }}
                          />
                            </span> from London.</h2>
                    </div>
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

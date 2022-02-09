import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  var date = new Date().getFullYear();
  console.log(date)


  const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                <p>My name is <strong>Alex Caires,</strong> I am {getAge('1998-02-16')} Years old, originally from
            Portugal, Madeira Island, where I studied Science and Technology, to the United Kingdom where I started learning and dived into programming since 2020.
          </p>
          <h2><strong>Experience</strong></h2>
          <p>Worked for a few projects for some local companies and agencies such as <b>Collider</b> and <b>Redgrain</b>, as a <b>Freelancer</b> where I had the opportunity to help
            build and delivery websites, emails and banner adds for their key clients such as <b>Sharp</b>, <b>AstraZeneca</b>, <b>Lyxor ETF</b> and many others.</p>
            <h2><strong>Hobbies</strong></h2>
            <p>Progamming is not my only passion I also like to do Exercise, Nature Walks, Mountain biking and <b><a title="Twitch Channel" href="https://www.twitch.tv/alexigurtes" target="_blank" rel="noopener noreferrer">Gaming</a></b> </p>
            <p>If you want to know more about me, download my resume in the button bellow.</p>
            </p>

                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

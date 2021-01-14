import React from "react"
import SkillStyles from "../styles/components/skills.module.scss"
import images from '../images/svg-1.svg'
import images2 from '../images/svg-2.svg'
import images3 from '../images/svg-3.svg'

class Skills extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div id={SkillStyles.skills}> 
      <h2>Services</h2>
        <div className={SkillStyles.inner}>
          <div className={SkillStyles.item}>
            <div className={SkillStyles.head}>
              <h1>Freelancer</h1>
              <img src={images} alt="Avatar" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo
              beatae ducimus ex blanditiis rerum tenetur vitae, adipisci
              possimus neque ad, asperiores odit cupiditate vero suscipit.
              Impedit, ea cum? Vero nisi unde impedit ipsa harum fuga
              asperiores, aspernatur quas, dolore consequuntur quis ipsam ab
              provident nobis nostrum, quidem quam eaque!
            </p>
            <a href="#0">Click Me </a>
          </div>
          <div className={SkillStyles.item}>
            <div className={SkillStyles.head}>
              <h1>Front-End</h1>
              <img src={images} alt="Avatar" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo
              beatae ducimus ex blanditiis rerum tenetur vitae, adipisci
              possimus neque ad, asperiores odit cupiditate vero suscipit.
              Impedit, ea cum? Vero nisi unde impedit ipsa harum fuga
              asperiores, aspernatur quas, dolore consequuntur quis ipsam ab
              provident nobis nostrum, quidem quam eaque!
            </p>
            <a href="#0">Click Me</a>
          </div>
          <div className={SkillStyles.item}>
            <div className={SkillStyles.head}>
              <h1>Web Developer</h1>
              <img src={images} alt="Avatar" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo
              beatae ducimus ex blanditiis rerum tenetur vitae, adipisci
              possimus neque ad, asperiores odit cupiditate vero suscipit.
              Impedit, ea cum? Vero nisi unde impedit ipsa harum fuga
              asperiores, aspernatur quas, dolore consequuntur quis ipsam ab
              provident nobis nostrum, quidem quam eaque!
            </p>
            <a href="#0">Click Me </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills

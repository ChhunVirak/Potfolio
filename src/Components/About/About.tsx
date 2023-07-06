import "./About.css";
import Me from "../../assets/my-profile.png";

import Skill from "./Skill";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Me} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Chhoeung Chhun Virak, a Flutter Developer from Takeo,
              Cambodia. I have rich experience in Mobile App Development with
              Dart and Flutter Framework. also I am an Internship Trainer.
            </p>
            <button className="btn">Download CV</button>
          </div>

          <div className="about__skills grid">
            <Skill name="Flutter" percent="80%" color="#027DFD" />
            <Skill name="Dart" percent="80%" color="#0553B1" />
            <Skill name="UX/UI" percent="60%" color="#ff4d61" />
            <Skill name="React" percent="50%" color="#61dbfb" />
            <Skill name="Node Js" percent="50%" color="#3c873a" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

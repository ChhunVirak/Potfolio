import "./Home.css";

import Me from "../../assets/my-profile.png";
import HomeSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__image" />
        <h1 className="home__name">Chhoeung Chhun Virak</h1>
        <span className="home__education">I'm a Senior Flutter Developer</span>
        <HomeSocials />
        <a href="#contact" className="btn">
          Hire Me
        </a>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;

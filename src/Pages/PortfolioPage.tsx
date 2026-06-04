import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Experience from '../Components/Experience/Experiences';
import Education from '../Components/Education/Education';
import Achievement from '../Components/Achievement/Achievement';
import TechStack from '../Components/TechStack/TechStack';
import Contact from '../Components/Social/Socials';
import Footer from '../Components/Footer/Footer';

const PortfolioPage = () => {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) {
      const el = document.getElementById(state.scrollTo);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [state]);

  return (
    <>
      <Home />
      <Experience />
      <Education />
      <Achievement />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default PortfolioPage;

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Work from '../Components/Work/Work';
import Experience from '../Components/Experience/Experiences';
import Writing from '../Components/Writing/Writing';
import Achievement from '../Components/Achievement/Achievement';
import Education from '../Components/Education/Education';
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
      <div className='mx-auto max-w-[1120px] px-5 md:px-8'>
        <Home />
        <Work />
        <Experience />
        <Achievement />
        <Education />
        <TechStack />
        <Writing />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default PortfolioPage;

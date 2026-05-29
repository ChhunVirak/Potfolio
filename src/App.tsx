import { useTheme } from './hooks/useTheme';
import Home from './Components/Home/Home';
import Experience from './Components/Experience/Experiences';
import Education from './Components/Education/Education';
import Achievement from './Components/Achievement/Achievement';
import TechStack from './Components/TechStack/TechStack';
import GoTopButton from './Components/Common/GoTopButton';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/Common/NavBar';
import Contact from './Components/Social/Socials';

function App() {
  const { dark, toggle } = useTheme();

  if (window.location.hash) {
    window.history.replaceState('', document.title, window.location.pathname);
  }

  return (
    <div className='dark:bg-zinc-900 dark:text-white min-h-screen'>
      <NavBar dark={dark} toggle={toggle} />
      <main>
        <Home />
        <Experience />
        <Education />
        <Achievement />
        <TechStack />
        <Contact />
        <Footer />

        <GoTopButton />
      </main>
    </div>
  );
}

export default App;

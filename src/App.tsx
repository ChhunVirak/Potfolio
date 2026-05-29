import Home from './Components/Home/Home';
import Experience from './Components/Experience/Experiences';
import Achievement from './Components/Achievement/Achievement';
import TechStack from './Components/TechStack/TechStack';
import GoTopButton from './Components/Common/GoTopButton';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/Common/NavBar';
import Contact from './Components/Social/Socials';

function App() {
  if (window.location.hash) {
    window.history.replaceState('', document.title, window.location.pathname);
  }

  return (
    <>
      <NavBar />
      <main>
        <Home />
        <Experience />
        <Achievement />
        <TechStack />
        <Contact />
        <Footer />

        <GoTopButton />
      </main>
    </>
  );
}

export default App;

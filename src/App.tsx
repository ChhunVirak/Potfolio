import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Service/Services";
import Contact from "./Components/Contact/Contact";
import Archievement from "./Components/Archievement/Archievement";

function App() {
  if (window.location.hash) {
    window.history.replaceState("", document.title, window.location.pathname);
  }
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Archievement />
        <Services />
        <Contact />
        <a href="#" className="btn-top">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </main>
    </>
  );
}

export default App;

import './App.css';
// import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Components/Home/Home';
// import About from './Components/About/About';
// import Services from './Components/Service/Services';
// import Contact from './Components/Contact/Contact';
// import Archievement from './Components/Archievement/Archievement';
// import Experience from './Components/Experience/Experience';

function App() {
  if (window.location.hash) {
    window.history.replaceState('', document.title, window.location.pathname);
  }
  return <Home key={'Home'} />;
}

export default App;

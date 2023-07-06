import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;

import "./Sidebar.css";
import Logo from "../../assets/logo_r.svg";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="" />
      </a>
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="fa-solid fa-house"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="fa-solid fa-circle-info"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#archievement" className="nav__link">
                <i className="fa-solid fa-star"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#service" className="nav__link">
                <i className="fa-solid fa-briefcase"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="fa-solid fa-message"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2022 - 2023.</span>
      </div>
    </aside>
  );
};

export default Sidebar;

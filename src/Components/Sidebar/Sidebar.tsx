// import './Sidebar.css';

import { Box } from '@mui/material';

const sidebars = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
    icon: 'fa-solid fa-code', //<i class="fa-solid fa-code"></i>
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
    icon: 'fa-solid fa-file-code',
  },
  {
    id: 3,
    name: 'Experience',
    href: '#experience',
    icon: 'fa-solid fa-award',
  },
  {
    id: 4,
    name: 'Archievement',
    href: '#archievement',
    icon: 'fa-solid fa-star',
  },
  {
    id: 5,
    name: 'Service',
    href: '#service',
    icon: 'fa-solid fa-briefcase',
  },
  {
    id: 6,
    name: 'Contact',
    href: '#contact',
    icon: 'fa-solid fa-message',
  },
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        // display: 'static',
        position: 'fixed',
        zIndex: 10,
      }}
    >
      <ul>
        {sidebars.map((side) => (
          <li className="nav__item" key={side.id}>
            <a href={side.href} className="nav__link">
              {/* <i className={side.icon}></i> */}
              <p>{side.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Sidebar;

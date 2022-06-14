import { useState } from 'react';
import './navbar.component.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = (e: any) => {
        setIsOpen(!isOpen);
      };

  return (
    <div>
      <nav className="nav">
        <div className={`burger ${isOpen && 'burger--active'}`} onClick={(e) => {openMenu(e)}}>
          <div className="burger__patty" />
        </div>
        <ul className={`nav__list ${isOpen && 'nav__list--active'}`}>
          <li className="nav__item">
            <a href="#1" className="nav__link c-blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-archive"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>
            </a>
          </li>
          <li className="nav__item">
            <a href="#2" className="nav__link c-yellow scrolly">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-archive"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>
            </a>
          </li>
          <li className="nav__item">
            <a href="#3" className="nav__link c-red">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-archive"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>
            </a>
          </li>
          <li className="nav__item">
            <a href="#4" className="nav__link c-green">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-archive"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

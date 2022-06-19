import { CalendarIcon, LogoutIcon, HomeIcon } from "@heroicons/react/outline";
import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "src/services/logout";

import "./navbar.component.css";

const NavBar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const openMenu = (e: any) => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="nav">
        <div
          className={`burger ${isOpen && "burger--active"}`}
          onClick={(e) => {
            openMenu(e);
          }}
        >
          <div className="burger__patty" />
        </div>
        <ul className={`nav__list ${isOpen && "nav__list--active"}`}>
          <li className="nav__item">
            <NavLink to="/" className="nav__link c-blue">
              <HomeIcon
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-archive"
              />
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/client/reservations"
              className="nav__link c-yellow scrolly"
            >
              <CalendarIcon
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-archive"
              />
            </NavLink>
          </li>
          <li className="nav__item">
            <div
              className="nav__link c-red cursor-pointer"
              onClick={() => {
                logout() && navigate("/login");
              }}
            >
              <LogoutIcon
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-archive"
              />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

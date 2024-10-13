import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function Navbar() {
  return (
    <div className="navbar container mx-auto pt-[50px]">
      {/* Logo */}
      <div className="navbar-start">
        <img src={logo} className="h-16" />
      </div>

      {/* Mobile Menu (Dropdown for small screens) */}
      <div className="navbar-end md:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu  dropdown-content right-0 rounded-box z-[1] mt-3 w-52"
          >
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-red-400 font-bold" : "font-bold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/donation"}
                className={({ isActive }) =>
                  isActive ? "text-red-400 font-bold" : "font-bold"
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/statistics"}
                className={({ isActive }) =>
                  isActive ? "text-red-400 font-bold" : "font-bold"
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-end hidden md:flex ">
        <ul className="menu-horizontal px-5 menu">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-red-400 font-bold" : "font-bold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/donation"}
              className={({ isActive }) =>
                isActive ? "text-red-400 font-bold" : "font-bold"
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/statistics"}
              className={({ isActive }) =>
                isActive ? "text-red-400 font-bold" : "font-bold"
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

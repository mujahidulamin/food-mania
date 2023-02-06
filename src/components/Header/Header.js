import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <NavLink to={"/home"}>HOME</NavLink>
      </li>

      <li>
        <NavLink to={"/foods"}>Foods</NavLink>
      </li>

      <li>
        <NavLink to={"/contact"}>CONTACT US</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white sticky top-0 z-50 border">
      {/* <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link className="normal-case text-xl">
            <p className="title">Sayesta Goswami, PhD</p>
            <p className="text-xs text-center sub-title">
              <small>CLINICAL PSYCHOLOGIST</small>
            </p>
          </Link>
          <br />
        </div>
        <div className="right">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>HOME</Link>
            </li>
            <li >
              <Link>ABOUT ME</Link>
            </li>
            <li>
            <Link>CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="navbar container mx-auto">
        <div className="flex-1 ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 mr-auto"
            >
              {menuItems}
            </ul>
          </div>
          <Link className="normal-case text-xl" to={"/home"}>
            <div className="flex justify-center items-center">
              <img src={logo} alt="" className="h-16 w-16" />
              <p className="font-bold text-2xl">Food Mania</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex right">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};
export default Header;

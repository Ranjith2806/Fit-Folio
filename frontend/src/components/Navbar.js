import React from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { RiAddCircleLine, RiUserAddLine, RiUserLine } from 'react-icons/ri';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a exact className="nav-link" href="https://silver-fudge-d922a7.netlify.app/">
              <FaDumbbell className="icon" /> Exercises List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://silver-fudge-d922a7.netlify.app/create">
              <RiAddCircleLine className="icon" /> Create Exercise Log
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://silver-fudge-d922a7.netlify.app/user">
              <RiUserAddLine className="icon" /> Create User
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://silver-fudge-d922a7.netlify.app/users">
              <RiUserLine className="icon" /> Users
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

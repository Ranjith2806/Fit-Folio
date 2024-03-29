import React from 'react';
// import { Link } from 'react-router-dom';
import { FaDumbbell } from 'react-icons/fa';
import { RiAddCircleLine, RiUserAddLine, RiUserLine } from 'react-icons/ri';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <a  className="navbar-brand" href="/">
        <FaDumbbell className="icon" /> Fit-Folio
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a exact className="nav-link" href="/">
              <FaDumbbell className="icon" /> Exercises List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/create">
              <RiAddCircleLine className="icon" /> Create Exercise Log
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/user">
              <RiUserAddLine className="icon" /> Create User
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/users">
              <RiUserLine className="icon" /> Users
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

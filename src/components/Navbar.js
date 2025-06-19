import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg ${props.mode === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
      <a className="navbar-brand mx-1" href="/">
        {props.title}
        {/* textUtils */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About Us
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex">
        <button
          className={`btn ${props.mode === 'light' ? 'btn-light' : 'btn-dark'} rounded-circle d-flex align-items-center justify-content-center mx-2`}
          style={{ width: '50px', height: '50px' }}
          onClick={props.toggleMode}
        >
          <FontAwesomeIcon icon={faSun} />
        </button>
      </div>
    </nav>
  );
}

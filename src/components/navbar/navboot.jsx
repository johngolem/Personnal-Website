import React from "react";
import "./navbar.css";

const Navb = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only"></span>
            </a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="#">
              Login
            </a>
          </li> */}
          <li class="nav-item">
            <button class="btn btn-outline-success" type="button">
              Login
            </button>
            <button class="btn btn-sm btn-outline-secondary" type="button">
              Register
            </button>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link enabled" href="#">
              Services
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Services
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navb;

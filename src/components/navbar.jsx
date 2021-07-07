import React, { Component } from "react";

//Stateless functional component : use emmet shortcut sfc
//In SFC, props don't work, so we need to pass props as a parameter

// Using object destructuring, we destructure the props argument, we cannot use lifecycle hooks in sfc
const NavBar = ({ totalCounters }) => {
  console.log("Navbar - rendered");
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge bg-pill bg-primary">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

// class navbar extends Component {}

export default NavBar;

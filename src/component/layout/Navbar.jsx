import React from 'react';
import { Link, NavLink } from "react-router-dom";
export default class Navbar extends React.Component{
    render()
    {
        return(
            <>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">MUPG</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
          <NavLink className="navbar-brand" exact to="/">
          Home
        </NavLink>
          </li>
          
          <li className="nav-item">
          <NavLink className="navbar-brand" exact to="/about">
          About
        </NavLink>
            
          </li>
          <li className="nav-item">
          <NavLink className="navbar-brand" exact to="/contact">
          Contact
        </NavLink>
        </li>
        </ul>
      </div>
    </div>
  </nav>

            </>
        )
    }

}
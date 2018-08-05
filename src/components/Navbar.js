import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return(
      <nav className='nav'>
        <h1>
          <ul>
            <li><a href="Home">Home</a></li>
            <li><a href="Projects">Projects</a></li>
            <li><a href="Contact">Contact</a></li>
            <li><a href="About">About</a></li>
          </ul>
        </h1>
      </nav>
    )
  }
}

export default Navbar;
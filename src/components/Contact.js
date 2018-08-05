import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return(
      <div id="contact">
        <header>
          <h2>Contact Me</h2>
        </header>
        <form>
          <h4>
          First name: <input type="text" name="fname"/>
          Last name: <input type="text" name="lname"/>
          Email: <input type="email" name="emailaddress"/>
          </h4>
        </form>
      </div>
    )
  }
}

export default Contact;
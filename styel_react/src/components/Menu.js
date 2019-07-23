import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = logout => {
      const cookies = new Cookies();
      let cookieToken = cookies.get("access_token");
      console.log(cookieToken);
    };
  }
  render() {
    return (
      <div>
        <ul className="header">
          <li>
            <NavLink exact to="/">
              STYEL
            </NavLink>
          </li>
          {/* <li>
          <NavLink exact to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/about/foo" activeStyle={activeStyle}>
            About Foo
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" activeStyle={activeStyle}>
            Posts
          </NavLink>
        </li> */}
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/me">Me</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

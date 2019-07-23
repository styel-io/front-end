import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Me.scss";

export default class Me extends Component {
  constructor(props) {
    super(props);

    this.state = { loginuser: [] };
  }
  componentDidMount() {
    const cookies = new Cookies();
    let cookieToken = cookies.get("access_token");
    console.log(cookieToken);
    axios
      .get("http://70.12.50.169:4000/api/auth/me", {
        headers: { "x-access-token": cookieToken }
      })
      .then(response => {
        console.log("success: ", response);
        console.log(response.data.data.username);
        let loginUser = response.data.data.username;

        this.setState({
          loginuser: loginUser
        });
      })
      .catch(error => {
        console.log("failure: ", error);
      });
  }

  render() {
    return (
      <div className="mainBox">
        <div className="avata">
          <span>
            <h2>avata</h2>
          </span>
        </div>
        <br />
        <h4>{this.state.loginuser}</h4>
      </div>
    );
  }
}

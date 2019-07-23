import React, { Component } from "react";
import { Button, Form, Label, FormGroup, Input } from "reactstrap";
import axios from "axios";
import serialize from "form-serialize";
import Cookies from "universal-cookie";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.scss";

export default class Login extends Component {
  postLogin = () => {
    let formData = document.querySelector("#loginForm");
    // let cookieData = document.cookie.split("; ").reduce((prev, current) => {
    //   const [name, value] = current.split("=");
    //   prev[name] = value;
    //   return prev;
    // }, {});
    const cookies = new Cookies();
    let cookieToken = cookies.get("access_token");

    console.log(cookieToken);
    // console.log(cookieData["access_token"]);

    console.log(serialize(formData, { hash: true }));
    axios
      .post(
        "http://70.12.50.169:4000/api/auth/login",
        serialize(formData, { hash: true }),
        {
          headers: {
            "x-access-token": cookieToken
          }
        }
      )
      .then(response => {
        console.log("success: ", response);
        console.log(response.data.data);
        const cookies = new Cookies();
        cookies.set("access_token", response.data.data, {
          path: "/"
        });

        // window.location.href = "http://localhost:3000/login";
        window.location.replace("http://70.12.50.169:3000/me");
      })
      .catch(error => {
        console.log("failure: ", error);
      });
    document.getElementById("formUsername").value = "";
    document.getElementById("formPassword").value = "";
  };

  render() {
    return (
      <Form className="login-form" id="loginForm">
        <h1 className="text-center">STYEL</h1>
        <h4 className="text-center">forever young</h4>
        <FormGroup>
          <Label>username</Label>
          <Input
            type="text"
            id="formUsername"
            placeholder="username"
            name="username"
            autoComplete="username"
            required
            autoFocus
          />
        </FormGroup>
        <FormGroup>
          <Label>password</Label>
          <Input
            type="password"
            id="formPassword"
            placeholder="password"
            aria-describedby="passwordHelpBlock"
            name="password"
            autoComplete="current-password"
            required
          />
          <small id="passwordHelpBlock" className="form-text text-muted">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji
          </small>
        </FormGroup>
        <Button
          className="btn btn-lg btn-dark btn-block"
          onClick={this.postLogin}
        >
          LOGIN
        </Button>
        <hr />
        <div className="text-center">
          <a href="/signup">Sign Up</a>
          <span> | </span>
          <a href="/forgotPassword">Forgot Password</a>
        </div>
      </Form>
    );
  }
}

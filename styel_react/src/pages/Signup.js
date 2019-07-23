import React, { Component } from "react";
import { Button, Form, Label, FormGroup, Input } from "reactstrap"; // use button component
import axios from "axios";
import serialize from "form-serialize";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.scss";

export default class Signup extends Component {
  postSignup = () => {
    let formData = document.querySelector("#signupForm");
    console.log(serialize(formData, { hash: true }));
    axios
      .post(
        "http://70.12.50.169:4000/api/users",
        serialize(formData, { hash: true })
      )
      .then(response => {
        console.log("success: ", response);
        console.log(response.data.data.username);
        window.location.replace("http://70.12.50.169:3000/login");
      })
      .catch(error => {
        console.log("failure: ", error);
      });
  };
  render() {
    return (
      <Form className="signup-form" id="signupForm">
        <h1 className="text-center">STYEL</h1>
        <h4 className="text-center">Forever Young</h4>
        <FormGroup>
          <Label>username</Label>
          <Input
            type="text"
            id="inputUsername"
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
            id="inputPassword"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>password</Label>
          <Input
            type="password"
            id="inputConfirmPassword"
            placeholder="Confirm password"
            name="passwordConfirmation"
            autoComplete="-new-password"
            required
          />
        </FormGroup>
        <Button
          className="btn btn-lg btn-dark btn-block"
          onClick={this.postSignup}
        >
          Sign Up
        </Button>
        <hr />
        <div className="text-center">
          <a href="/login">Login</a>
        </div>
      </Form>
    );
  }
}

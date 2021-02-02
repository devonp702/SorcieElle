import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export class Signup extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      buttonClicked: false
    };
    this.sendForm = this.sendForm.bind(this);
  }

  sendForm () {
    if (!this.state.buttonClicked) {
      this.setState({
        buttonClicked: true
      });
      alert("sign-up complete!");
    }
  }

  render() {
    return (
      <div>
        <h3>Get updates here.</h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
          <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name" />
        </Form.Group>
        <Button variant="primary" onClick = {this.sendForm}>
          Submit
        </Button>
      </Form>
    </div>
    )
  }
};

export default Signup

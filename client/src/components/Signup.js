import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import API from "../utils/API"

export class Signup extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: ''
    };
  }

  submitForm = () => {
    const data = {
      name: this.state.name,
      email: this.state.email
    };
    API.postUsers(data)
    .then(response => {
      console.log(response);
    });
    console.log(this.state);
    alert("Thank you!");
}
onChangeHandler = event => {
  event.preventDefault();
  this.setState({
    [event.target.name]: event.target.value
  });
}

  render() {
    return (
      <div>
        <h3>Get updates here.</h3>
        <Form onSubmit={event => event.preventDefault()}>
          Name:
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.onChangeHandler}
          /><br/>
          Email:
          <input
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.onChangeHandler}
          />
      </Form>
      <Button onClick={this.submitForm}>submit</Button>
    </div>
    )
  }
};
export default Signup

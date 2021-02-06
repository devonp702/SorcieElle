import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

export class Signup extends Component {
  constructor(){
    super(props);
    this.state = {
      email: '',
      name: ''
    };
  }

  postDataHandler = () => {
    const data = {
        name: this.state.name,
        email: this.state.email
    };
    axios.post('https://localhost:3001/', data)
        .then(response => {
            console.log(response);
        });
}

  render() {
    return (
      <div>
        <h3>Get updates here.</h3>
        <Form onSubmit={event => event.preventDefault()}>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.onChangeHandler}
          />
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

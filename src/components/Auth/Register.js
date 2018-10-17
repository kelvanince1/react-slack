import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';

import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(createdUser => {
        console.log(createdUser);
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    const { username, email, password, passwordConfirmation } = this.state;
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="puzzle piece" color="orange" />
            Register for Dev Chat
          </Header>
          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked>
              <Form.Input
                fluid name="username"
                icon="user"
                placeholder="Username"
                iconPosition="left"
                onChange={this.handleChange}
                type="text"
                value={username}
              />
              <Form.Input
                fluid name="email"
                icon="mail"
                placeholder="user@mail.com"
                iconPosition="left"
                onChange={this.handleChange}
                type="email"
                value={email}
              />
              <Form.Input
                fluid name="password"
                icon="lock"
                placeholder="Password"
                iconPosition="left"
                onChange={this.handleChange}
                type="password"
                value={password}
              />
              <Form.Input
                fluid name="passwordConfirmation"
                icon="repeat"
                placeholder="Password Confirmation"
                iconPosition="left"
                onChange={this.handleChange}
                type="password"
                value={passwordConfirmation}
              />

              <Button color="orange" size="large" fluid>Submit</Button>
            </Segment>
          </Form>
          <Message>
            Already a user? <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  };
}

export default Register;

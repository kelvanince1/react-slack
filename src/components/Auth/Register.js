import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';

class Register extends Component {
  state = {

  }

  handleChange = () => {

  }

  render() {
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="puzzle piece" color="orange" />
            Register for Dev Chat
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid name="username"
                icon="user"
                placeholder="Username"
                iconPosition="left"
                onChange={this.handleChange}
                type="text"
              />
              <Form.Input
                fluid name="email"
                icon="mail"
                placeholder="user@mail.com"
                iconPosition="left"
                onChange={this.handleChange}
                type="email"
              />
              <Form.Input
                fluid name="password"
                icon="lock"
                placeholder="Password"
                iconPosition="left"
                onChange={this.handleChange}
                type="password"
              />
              <Form.Input
                fluid name="passwordConfirmation"
                icon="repeat"
                placeholder="Password Confirmation"
                iconPosition="left"
                onChange={this.handleChange}
                type="password"
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

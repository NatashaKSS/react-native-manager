/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import type { EmailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

type Props = {
  emailChanged: EmailChanged,
  email: string,
}

class LoginForm extends Component<Props> {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  render() {
    const { email } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
  };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);

/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import type { EmailChanged, PasswordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

type Props = {
  emailChanged: EmailChanged,
  passwordChanged: PasswordChanged,
  email: string,
  password: string,
}

class LoginForm extends Component<Props> {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  }

  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    const { email, password } = this.props;

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
            onChangeText={this.onPasswordChange}
            value={password}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
});

export default connect(mapStateToProps,
  { emailChanged, passwordChanged, loginUser })(LoginForm);

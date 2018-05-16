import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import type { EmployeeUpdateType, EmployeeSaveType, EmployeeDeleteType } from '../actions';

type Props = {
  name: string,
  phone: string,
  shift: string,
  employee: {
    uid: string,
  },
  employeeUpdate: EmployeeUpdateType,
  employeeSave: EmployeeSaveType,
  employeeDelete: EmployeeDeleteType,
}

class EmployeeEdit extends Component<Props> {
  state = { showModal: false };

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({
      name, phone, shift, uid: this.props.employee.uid,
    });
  }

  onSMSTextPress = () => {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onFireEmployee = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  onAcceptDelete = () => {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }

  onDeclineDelete = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onSMSTextPress}>
            SMS Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onFireEmployee}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAcceptDelete}
          onDecline={this.onDeclineDelete}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps,
  { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);

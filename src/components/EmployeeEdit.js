import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';
import type { EmployeeUpdateType, EmployeeSaveType } from '../actions';

type Props = {
  name: string,
  phone: string,
  shift: string,
  employee: {
    uid: string,
  },
  employeeUpdate: EmployeeUpdateType,
  employeeSave: EmployeeSaveType,
}

class EmployeeEdit extends Component<Props> {
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

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps,
  { employeeUpdate, employeeSave })(EmployeeEdit);

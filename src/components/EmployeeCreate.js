import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate, employeeClearForm } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import type { EmployeeCreateType, EmployeeClearFormType } from '../actions';

type Props = {
  name: string,
  phone: string,
  shift: string,
  employeeCreate: EmployeeCreateType,
  employeeClearForm: EmployeeClearFormType,
}

class EmployeeCreate extends Component<Props> {
  componentDidMount() {
    this.props.employeeClearForm();
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Create
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

export default connect(mapStateToProps, { employeeCreate, employeeClearForm })(EmployeeCreate);

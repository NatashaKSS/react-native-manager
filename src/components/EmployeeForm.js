import React from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';
import type { EmployeeUpdateType } from '../actions';

type Props = {
  name: string,
  phone: string,
  shift: string,
  employeeUpdate: EmployeeUpdateType,
}

const EmployeeForm = (props: Props) => {
  const { name, phone, shift } = props;

  return (
    <View>
      <CardSection>
        <Input
          label="Name"
          placeholder="Tom"
          value={name}
          onChangeText={value => props.employeeUpdate({ prop: 'name', value })}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Phone"
          placeholder="5555-5555"
          value={phone}
          onChangeText={value => props.employeeUpdate({ prop: 'phone', value })}
        />
      </CardSection>

      <CardSection style={{ flexDirection: 'column' }}>
        <Text style={styles.pickerLabelStyle}>Select a shift</Text>
        <Picker
          style={styles.pickerStyle}
          selectedValue={shift}
          onValueChange={value => props.employeeUpdate({ prop: 'shift', value })}
        >
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>
    </View>
  );
};

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
  pickerStyle: {
    height: 225,
    width: '100%',
  },
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import type { EmployeesFetchType } from '../actions';
import ListItem from './ListItem';

type Props = {
  employees: Array,
  employeesFetch: EmployeesFetchType,
}

class EmployeeList extends Component<Props> {
  componentDidMount() {
    this.props.employeesFetch();
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={({ item }) => {
          return <ListItem employee={item} />;
        }}
        keyExtractor={employee => employee.uid}
      />
    );
  }
}

const mapStateToProps = (state) => {
  // for each key-value pair in val (our employee model / object) specified by
  // state.employees, create a new object with an extra uid field and pack them
  // all into an array.
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

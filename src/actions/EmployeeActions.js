import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
} from './types';

export type EmployeeUpdateType = {
  type: string,
  payload: {
    prop: string,
    value: string,
  },
};

// 1 Action creator that can update any different property existing in our form
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};

export type EmployeeCreateType = (obj : Object) => (dispatch: Function) => Function;

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop();
      });
  };
};

export type EmployeesFetchType = () => (dispatch: Function) => Function;

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    // Listens for updates to this ref endpoint for the lifetime of the
    // application. Hence, it works quite nicely with redux since the action
    // would only be dispatched when a change to the employees' list is made.
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', (snapshot) => {
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val(),
        });
      });
  };
};

export type EmployeeSaveType = () => () => Function;

export const employeeSave = ({
  name, phone, shift, uid,
}) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.pop();
      });
  };
};

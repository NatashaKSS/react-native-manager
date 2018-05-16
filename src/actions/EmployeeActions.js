import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_CLEAR_FORM,
} from './types';

export type EmployeeClearFormType = { type: string };

export const employeeClearForm = () => {
  return { type: EMPLOYEE_CLEAR_FORM };
};

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
        dispatch({ type: EMPLOYEE_CLEAR_FORM });
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
        dispatch({ type: EMPLOYEE_CLEAR_FORM });
        Actions.pop();
      });
  };
};

export type EmployeeDeleteType = () => () => Function;

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.pop();
      });
  };
};

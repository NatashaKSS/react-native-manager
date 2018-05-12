import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';

export type EmailChanged = {
  type: string,
  payload: string,
};

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export type PasswordChanged = {
  type: string,
  payload: string,
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export type LoginUser = {
  type: string,
  payload: Object,
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      });
  };
};

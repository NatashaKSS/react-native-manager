import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

export type EmailChanged = {
  type: string,
  payload: string,
};

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text,
});

export type PasswordChanged = {
  type: string,
  payload: string,
};

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

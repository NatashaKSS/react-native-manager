import { EMAIL_CHANGED } from './types';

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

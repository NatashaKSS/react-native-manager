import { EMPLOYEE_UPDATE } from './types';

// 1 Action creator that can update any different property existing in our form
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};

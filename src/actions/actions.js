import { GET_COURSES } from './types';

import axios from 'axios';

export const getCourses = () => dispatch => {
  axios
    .get('https://private-8ff65-courses23.apiary-mock.com/courses')
    .then(resp => {
      dispatch({
        type: GET_COURSES,
        payload: resp.data
      });
    })
    .catch(err => {
      // Handle Error Here
      console.error(err);
    });
};

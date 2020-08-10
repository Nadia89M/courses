import { GET_COURSES } from './types';
import { GET_SINGLE_COURSE } from './types';
import { RESET_LOADING } from './types';
import { GET_LOCATION } from './types';

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

export const getSingleCourse = slug => dispatch => {
  let url = `https://private-8ff65-courses23.apiary-mock.com/courses${slug}`;
  axios
    .get(url)
    .then(resp => {
      dispatch({
        type: GET_SINGLE_COURSE,
        payload: resp.data
      });
    })
    .catch(err => {
      // Handle Error Here
      console.error(err);
    });
};

export const resetLoading = () => dispatch => {
  dispatch({
    type: RESET_LOADING
  });
};

export const getLocation = () => dispatch => {
  let url =
    'http://api.ipstack.com/93.55.93.128?access_key=4b20ca744cacc0daa515be3cdc629b21&format=1';
  axios
    .get(url)
    .then(resp => {
      dispatch({
        type: GET_LOCATION,
        payload: resp.data.continent_code
      });
    })
    .catch(err => {
      // Handle Error Here
      console.error(err);
    });
};

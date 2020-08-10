import {
  GET_COURSES,
  GET_SINGLE_COURSE,
  RESET_LOADING,
  GET_LOCATION
} from '../actions/types';

const initialState = {
  courses: [],
  current_course: {},
  continent: '',
  loading: true
};
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COURSES:
      return {
        ...state,
        courses: payload
      };
    case GET_SINGLE_COURSE:
      return {
        ...state,
        current_course: payload,
        loading: false
      };
    case RESET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_LOCATION:
      return {
        ...state,
        continent: payload
      };
    default:
      return state;
  }
}

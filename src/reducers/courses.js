import { GET_COURSES } from '../actions/types';

const initialState = {
  courses: []
};
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COURSES:
      return {
        ...state,
        courses: payload
      };
    default:
      return state;
  }
}

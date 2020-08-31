import { SET_DATE } from "../actions";

const initialState = { length: 0, current: 0 };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATE:
      return action.payload;
    default:
      return state;
  }
}

export default rootReducer;

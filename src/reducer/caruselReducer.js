import { ITERATE_IMAGE_INDEX, SET_IMAGE_INDEX } from "../actions";

const initialState = { length: 0, current: 0 };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ITERATE_IMAGE_INDEX:
      return state;
    case SET_IMAGE_INDEX:
      return state;
    default:
      return state;
  }
}

export default rootReducer;

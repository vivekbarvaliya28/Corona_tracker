import {
  GET_DATA_REQUESTED, GET_DATA_SUCCESS, GET_DATA_FAILED, GET_CORONA_REQUESTED, GET_CORONA_SUCCESS, GET_CORONA_FAILED
} from "../actions/actiontype"

const initialstate = {
  items: [],
  loading: false,
  error: null,
};

const CorReducer = (state = initialstate, action) => {
  console.log("reducert --->", action, action.payload);

  switch (action.type) {
    case GET_DATA_REQUESTED:
      return {
        ...state,
        loading: true,
      };
      break;
    case GET_DATA_SUCCESS:

      return {
        ...state,
        loading: false,
        items: action.payload,
      };
      break;

    case GET_DATA_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return {
        ...state
      }

  }
};

export default CorReducer;

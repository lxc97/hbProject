import * as types from "../../constants/type";

const initialState = {
  loading: false,
  error: "",
};

const listRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_REQUEST:
      return {
        ...state,
      };
    case types.START_GET_LIST_REQUEST:
      return {
        ...state,
        loading: action.payload
      };
    case types.GET_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        data: {...action.payload},
        error: "",
      };
    case types.GET_LIST_REQUEST_FAIL:
      return {
        ...state,
        data: {},
        error: action.payload.error,
      };
    default:
      return state;
  }
};
export default listRequestReducer;

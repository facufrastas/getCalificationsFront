import {
  GET_CALIFICATIONS,
  GET_CALIFICATIONS_SUCCESS,
  GET_CALIFICATIONS_ERROR,
  CLEAR_CALIFICATIONS,
  GET_ASIGNATURES,
  GET_ASIGNATURES_SUCCESS,
  GET_ASIGNATURES_ERROR
} from '../actions/index';

const initState = {
  califications: null,
  asignatures: null,
  loading: false,
  statusCode: null,
};

const calificationsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CALIFICATIONS:
      return { ...state, loading: true };
    case GET_CALIFICATIONS_SUCCESS:
      return { ...state, califications: action.data, loading: false, statusCode: action.errorCode };
    case GET_CALIFICATIONS_ERROR:
      return { ...state, loading: false, statusCode: action.errorCode };
    case GET_ASIGNATURES:
      return { ...state, loading: true };
    case GET_ASIGNATURES_SUCCESS:
      return { ...state, asignatures: action.data, loading: false, statusCode: action.errorCode };
    case GET_ASIGNATURES_ERROR:
      return { ...state, loading: false, statusCode: action.errorCode };
    case CLEAR_CALIFICATIONS:
      state = undefined;
      break;
    default:
      return state;
  }
};

export default calificationsReducer;

import {ActionTypes} from '../actions';

const initialState = {
  isLoading: false,
  error: null,
  facts: []
};

export default function catReducer(state=initialState, action){
  switch(action.type){
    case ActionTypes.FETCH_START:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.FETCH_SUCCESS:
      return {
        error: null,
        facts: action.payload,
        isLoading: false
      };
    case ActionTypes.FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;

  }
}
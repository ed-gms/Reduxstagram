import { RECEIVE_API_DATA } from '../actions/actionCreators';

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return state;
      return data;
    default:
      return state;
  }
};
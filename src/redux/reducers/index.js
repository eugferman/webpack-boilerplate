import dataReducer from './dataReducer';
import { combineReducers } from "redux";

const allReducers = combineReducers({
  dataName: dataReducer,
});

export default allReducers;
import { combineReducers } from "redux";
import Reducer from "./Reducer";

const reducers = combineReducers({
  spinner: Reducer,
});

export default reducers;

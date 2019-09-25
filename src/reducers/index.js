import { combineReducers } from "redux";
import UserReducer from "./user";

const reducers = combineReducers({
  user: UserReducer
});

export default reducers;

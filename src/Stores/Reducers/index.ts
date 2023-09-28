import { combineReducers } from "@reduxjs/toolkit";
import LoadingReducer from "./loadingReducer";
import ErrorReducer from "./errorReducer";
import UserReducer from "./userReducer";

const rootReducer = combineReducers({
  loading: LoadingReducer,
  error: ErrorReducer,
  user:UserReducer
});
export default rootReducer;

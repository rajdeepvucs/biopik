import { combineReducers } from "@reduxjs/toolkit";
import LoadingReducer from "./loadingReducer";
import ErrorReducer from "./errorReducer";

const rootReducer = combineReducers({
  loading: LoadingReducer,
  error: ErrorReducer,
});
export default rootReducer;

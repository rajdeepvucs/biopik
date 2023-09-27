import InitialState from "./initialState";

import { ApiStatusActionTypes } from "../Actions/apiStatusActions";
import { ErrorState } from "../../Models/errorModels";

const initialState: ErrorState = InitialState.error;

export default function ErrorReducer(
  state: ErrorState = initialState,
  action: any
) {
  switch (action.type) {
    case ApiStatusActionTypes.Api_Call_Error:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

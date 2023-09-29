import {UserMain} from '../../Models/userModels';
import { useNavigate } from 'react-router-dom';
import {UserActionTypes} from '../Actions/userAction';
import InitialState from './initialState';

const initialState:UserMain  = InitialState.user;
export default function UserReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case UserActionTypes.Login_Success_Action:
       console.log("reducer",action.payload)
      return {...state, user_detail: action.payload};
    
    case UserActionTypes.Logout_Success_Action:
      return InitialState;
    default:
      return state;
  }
}
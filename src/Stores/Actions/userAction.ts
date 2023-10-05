
import { useNavigate } from 'react-router-dom';
import { UserLogin} from '../../Service/userService';
import {ApiCallErrorAction, BeginApiCallAction} from './apiStatusActions';
import Cookies from 'js-cookie';
export enum UserActionTypes {
  Login_Success_Action = '[USER] Login Success Action',
  Logout_Success_Action = '[USER] Logout Success Action',
 
}
export const LoginAction = (payload: any) => {
     //const navigate=useNavigate();
     
     const {customer_password,customer_phone,navigate}=payload;
     //console.log("first",customer_password)
     const customerData = {
      contact: customer_phone,
      password: customer_password,
      
    };
     
  return (dispatch: any, getState: any) => {
    dispatch(BeginApiCallAction({
      count: 1,
      message: 'Signing Please Wait...'}))
    return UserLogin(customerData)
      .then(response => {
        if (response.status != 200) {
          
          dispatch(ApiCallErrorAction(response.data));
        } else {
           console.log("from action",response.data)
          dispatch(LoginSuccess(response.data));
         
        }
      }).then(()=>{//localStorage.setItem("login", "true");
        const authToken = Cookies.get('admintoken');
        console.log("admin token",authToken)
        console.log("allll",Cookies.get)
        navigate("/customer")})
      
      .catch(error => {
        if (error?.response?.status === 403) {
          dispatch(
            ApiCallErrorAction({
              errorCode: '',
              message: 'Please Login again to continue.',
            }),
          );
          
          dispatch(UserLogoutSuccess());
        } else if (error?.response?.status === 500) {
          console.log("wrong")
          window.alert("Wrong Credential")
          dispatch(
            
            ApiCallErrorAction({
              errorCode: '',
              message: error?.response?.data?.message,
            }),
          );
        } else {
          dispatch(
            ApiCallErrorAction({
              errorCode: '',
              message: 'Error encountered please try again later',
            }),
          );
        }
      });
  };
};
export const LoginSuccess = (payload: any) => {
  return {
    type: UserActionTypes.Login_Success_Action,
    payload: payload,
  };
};

export const UserLogoutSuccess = () => {
  return {type: UserActionTypes.Logout_Success_Action};
};









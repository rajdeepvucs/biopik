import React from 'react'
import LoginView from './LoginView'
import { StoreState } from '../../../Models/reduxModel';
import { LoginAction } from '../../../Stores/Actions/userAction';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = ({LoginAction}:LoginPorps) => {
  
  const navigation = useNavigate();
  const Login = async(data: any) => {

console.log("From login",data)
    await LoginAction(data)
    
  };
  return <LoginView  Login={Login} />;
};


const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
   // user: state.user.user_detail,
  };
};
const mapDispatchToProps = {
  LoginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
interface LoginPorps {
  
  
  LoginAction?: any;
}


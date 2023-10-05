import React from 'react'
import LoginView from './LoginView'
import { StoreState } from '../../../Models/reduxModel';
import { LoginAction } from '../../../Stores/Actions/userAction';
import { connect } from 'react-redux';


const Login = ({LoginAction,user}:LoginPorps) => {
  

  const Login = async(data: any) => {


    await LoginAction(data)
    console.log("user",user);
  
  };
  return <LoginView  Login={Login} />;
};


const mapStateToProps = (state: StoreState, ownProps: any) => {
  console.log("first",state)
  return {
    user: state.user.user_detail,
  };
};
const mapDispatchToProps = {
  LoginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
interface LoginPorps {
  
  user?:any;
  LoginAction?: any;
}


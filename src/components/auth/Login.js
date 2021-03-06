import React from "react";
import Message from "../message";
//other login components
import LoginForm from "./form/index.js";
import LoginAttempt from "./LoginAttempt";
import LoginSuccess from "./LoginSuccess";

import { useSelector, useDispatch } from "react-redux";

import { updateCallbackUrl } from "./store/actions";

const Login = props => {
  //access our redux functionality
  const { user } = useSelector(state => state);
  const { submitted } = useSelector(state => state.loginForm);
  const dispatch = useDispatch();
  

  if (user.authenticated === true)
    return (
      <Message text="Congrats" image="success">
        <LoginSuccess>
          {setTimeout(() => dispatch(updateCallbackUrl(null)), 2000)}
        </LoginSuccess>
      </Message>
    );

  if (submitted === true) {
    return <LoginAttempt />;
  }

  return <LoginForm />;
};

export default Login;

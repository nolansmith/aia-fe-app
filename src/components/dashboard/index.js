import React, { useState, useEffect } from "react";
import Message from "../message";
import { useSelector } from "react-redux";
import Loading from "../loading";
import Error from "../error";

function Dashboard(props) {
  //loading and errors
  const NOT_LOADING = { status: false, message: "" };
  const NO_ERROR = { status: false, message: "" };
  const [isLoading, setLoad] = useState({
    status: true,
    message: "Fetching Dashboard..."
  });
  //eslint-disable-next-line
  const [isError, setError] = useState(NO_ERROR);
  //is logged in variables
  const [userLoggedIn, handleLoggedIn] = useState(false);
  //user variables
  const user = useSelector(state => state.user);
  //eslint-disable-next-line
  useEffect(() => {
    handleLoggedIn(user.authenticated);
    setLoad(NOT_LOADING);
  },[user]); //eslint-disable-line

  if (isLoading.status)
    return (
      <Loading
        message={isLoading.message}
        image="searching"
        maxHeight="200px"
      />
    );
  if (isError.status)
    return <Error message={isError.message} maxHeight="200px" />;

  if (userLoggedIn) {
    return <Message text="User Dashboard" />;
  } else {
    return <Message text="Not Logged In" />;
  }
}

export default Dashboard;

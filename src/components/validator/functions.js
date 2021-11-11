import axios from "axios";

export const verifyUserLogin = async function(user) {
  if (!user.authenticated) return { valid: false };
  let { token } = user;

  let tokenURL = `${process.env.REACT_APP_API_SERVER}/token`;

  let {data} = await axios
    .get(tokenURL + `/${token}`);

    return data;
   
};

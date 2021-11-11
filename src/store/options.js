import apolloClient from '../config/apollo/index';
//store options
//eslint-disable-next-line
export default {
    thunk: {
      arguments: {
        client: apolloClient
      }
    }
  };
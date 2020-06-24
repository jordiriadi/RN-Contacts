import React from 'react';
import { StatusBar } from 'react-native';
// import { Provider } from 'react-redux';

import Routes from './config/router';
// import store from './store';
import Styles from './utils/Styles';

const App = () => (
  // <Provider store={store}>
  <React.Fragment>
    <StatusBar backgroundColor={Styles.SecondaryColorDarkened} />
    <Routes />
  </React.Fragment>
  // </Provider>
);

export default App;

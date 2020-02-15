import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import { RootState } from '../store'
import withReduxStore from '../lib/with-redux-store';

interface Props   {
  reduxStore: RootState
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);

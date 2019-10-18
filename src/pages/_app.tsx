import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'redux-store/createStore';
import CustomErrorBoundary from 'components/global/customErrorBoundary';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = configureStore();

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CustomErrorBoundary>
            <Component {...pageProps} />
          </CustomErrorBoundary>
        </PersistGate>
      </Provider>
    );
  }
}

export default MyApp;

import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'redux-store/createStore';
import CustomErrorBoundary from 'components/global/customErrorBoundary';
import { PersistGate } from 'redux-persist/integration/react';
import { initGA, logPageView } from 'utils/analytics';

const { store, persistor } = configureStore();

class MyApp extends App {
  componentDidMount() {
    // Register Application Insights
    if (process.browser && process.env.NODE_ENV === 'production') {
      import('utils/applicationInsights').then(({ initAi }) => {
        initAi();
      });
    }

    // Register Google Analytics
    initGA();
    logPageView();
  }
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

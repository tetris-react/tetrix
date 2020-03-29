import './styles.css';

import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import rootReducer from '../store';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const theme: object = {
  colors: {
    primary: '#0070f3'
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </StylesProvider>
      </Provider>
    );
  }
}

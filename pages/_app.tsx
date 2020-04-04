import "./styles.css";

import App from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
// import logger from 'redux-logger';
import thunk from "redux-thunk";
import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import withApollo from "../lib/withApollo";
import rootReducer from "../store";

// const store = createStore(rootReducer, applyMiddleware(thunk, logger));
const store = createStore(rootReducer, applyMiddleware(thunk));

const theme: object = {
  colors: {
    primary: "#0070f3",
  },
};

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </StylesProvider>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);

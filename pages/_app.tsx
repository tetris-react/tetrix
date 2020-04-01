import "./styles.css";

import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
// import logger from 'redux-logger';
import thunk from "redux-thunk";
import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import rootReducer from "../store";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";

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
      <Container>
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <StylesProvider injectFirst>
              <ThemeProvider theme={theme}>
                <Component {...pageProps} />
              </ThemeProvider>
            </StylesProvider>
          </Provider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);

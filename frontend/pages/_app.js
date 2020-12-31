/* _app.js */
import React from 'react';

import App from 'next/app';
import Head from 'next/head';

import '../styles/global.css';

export default class Main extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }


  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head></Head>
        <Component {...pageProps} />
      </>
    );
  }
}

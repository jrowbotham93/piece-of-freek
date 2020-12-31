import React from "react";
import { Nav } from "../components";
import Head from 'next/head';


const Layout = ({ data, children }) => {
  return (
    <>
      <Head>
        <title>Piece of Freek</title>
      </Head>
      <div className="wrapper">
        <div className="grid">
          <section className="main flex flex-center">
            <header />
            <main>{children}</main>
            <footer />
          </section>
          <Nav />
        </div>
      </div>
    </>
  );
};

export default Layout;

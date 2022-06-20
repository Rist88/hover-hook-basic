import type { NextPage } from "next";
import Head from "next/head";
import Photos from "../components/Photos";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pic Some</title>
        <meta
          name="description"
          content="Simple image stock app using custom hooks, next/router and React Context."
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Photos />
    </>
  );
};

export default Home;

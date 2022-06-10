import React from "react";
import Head from "next/head";
import { Favicon } from "assets";
import Header from "components/Header";
import Body from "components/Body";

export default function Home() {
  return (
    <>
      <Head>
        <title>Intro section with dropdown navigation</title>
        <link rel="shortcut icon" href={Favicon} type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Body />
    </>
  );
}

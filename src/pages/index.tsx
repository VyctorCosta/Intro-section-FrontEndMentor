import React from "react";
import Head from "next/head";
import { SeedSVG, SeedPNG } from "assets";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Pagina Home</h1>
      <img src={SeedPNG} />
      <SeedSVG />
    </>
  );
}

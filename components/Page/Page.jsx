import React, { useEffect } from "react";

import { BlockRenderer } from "components/BlockRenderer";

// import { Footer } from "components/Footer";
// import { MainMenu } from "components/MainMenu";
import Head from "next/head";
import { MainMenu } from "components/MainMenu";

export const Page = (props) => {
  console.log("PAGE PROPS: ", props);

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  if (props.error) {
    return (
      <NotFoundPage />
    );
  }

  return (
    <>
      <Head>
        <title>{props.seo?.title}</title>
        <meta name="description" content={props.seo?.metaDesc} />
      </Head>
      <MainMenu />
      <BlockRenderer blocks={props.blocks} />
    </>
  )
}
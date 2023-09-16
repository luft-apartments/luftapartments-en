import React, { useEffect } from "react";

import { BlockRenderer } from "components/BlockRenderer";

// import { Footer } from "components/Footer";
// import { MainMenu } from "components/MainMenu";
import Head from "next/head";

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
      <BlockRenderer blocks={props.blocks} />
    </>
  )
}
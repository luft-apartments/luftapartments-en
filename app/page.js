import { BlockRenderer } from "components/BlockRenderer";
import { getPage } from "utils/getPage"
import { notFound } from 'next/navigation'
import { getSeo } from "utils/getSeo";
import { headers } from "next/dist/client/components/headers"
import Script from "next/script";

export default async function Home() {
  const data = await getPage('/');
  if (!data) {
    notFound();
  }
  // const _headers = headers();
  // const currentUrlMain = _headers.get("x-url");
  // console.log(currentUrlMain);
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7XR7SZ36DE"
      />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7XR7SZ36DE');
        `}
      </Script>
      <BlockRenderer blocks={data} />
    </>
  )
}

export async function generateMetadata() {
  const seo = await getSeo("/");
  return {
    title: seo?.title || "",
    description: seo?.metaDesc || "",
  };
}
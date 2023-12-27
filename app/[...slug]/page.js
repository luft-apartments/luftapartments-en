import { BlockRenderer } from "components/BlockRenderer";
import { getPage } from "utils/getPage"
import { notFound } from 'next/navigation'
import { getSeo } from "utils/getSeo";
import { headers } from "next/dist/client/components/headers"

export default async function Page({ params }) {
  const data = await getPage(params.slug.join('/'));
  if (!data) {
    notFound();
  }
  // const _headers = headers();
  // const currentUrl = _headers.get("x-url");
  // console.log(currentUrl);
  return <BlockRenderer blocks={data} />;
}

export async function generateMetadata({ params }) {
  const seo = await getSeo(params.slug.join('/'));
  return {
    title: seo?.title || "",
    description: seo?.metaDesc || "",
  };
}
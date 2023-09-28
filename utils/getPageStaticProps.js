import client from "client";
import { gql } from "@apollo/client";

import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";
import { mapSocialIcons } from "./mapSocialIcons";
import { mapFooterSocialIcons } from "./mapFooterSocialIcons";
import { mapFooterLinks } from "./mapFooterLinks";

export const getPageStaticProps = async (context) => {

  console.log("CONTEXT: ", context);
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          __typename
          ... on Page {
            id
            title
            blocks
            featuredImage {
              node {
                sourceUrl
              }
            }
            seo {
              title
              metaDesc
            }
          }
          ... on Post {
            id
            title
            date
            blocks
            categories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            seo {
              title
              metaDesc
            }
          }
        }
      acfOptionsMainMenu {
          mainMenu {
            logo {
              sourceUrl
            }
            headerDescription {
              boldText
              regularText
            }
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
        allPosts: posts(first: 10000) {
          nodes {
            id
            title
            uri
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              nodes {
                name
              }
            }
          }
        }
        apartmentsPages: pages(where: { parent: { node: { slug: "apartments" } } }) {
          nodes {
            id
            title
            uri
            blocks
            featuredImage {
              node {
                sourceUrl
              }
            }
            seo {
              title
              metaDesc
            }
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });

  const nodeByUri = data.nodeByUri || null;
  // Extract the apartmentsPages data
  const apartmentsPages = data.apartmentsPages.nodes;

  const blocks = cleanAndTransformBlocks(data.nodeByUri?.blocks || []);
  const isHomePage = uri === "/";

  if (nodeByUri === null) {
    return {
      props: {
        error: true,
      },
    };
  }

  return {
    props: {
      seo: data.nodeByUri?.seo || null,
      title: data.nodeByUri?.title || null,
      date: data.nodeByUri?.date || null,
      category: data.nodeByUri?.categories?.nodes?.[0]?.name || null,
      blocks,
      logo: data.acfOptionsMainMenu.mainMenu.logo.sourceUrl,
      mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
      featuredImage: data.nodeByUri?.featuredImage?.node?.sourceUrl || data.nodeByUri?.featuredImage?.sourceUrl || null,
      apartmentsPages,
    },
  };
};

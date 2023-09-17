import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";

export const getPage = async (uri) => {
  const params = {
    query: `
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
      }
    `,
    variables: {
      uri,
    },
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  const { data } = await response.json();
  const nodeByUri = data.nodeByUri || null;
  const blocks = cleanAndTransformBlocks(data.nodeByUri?.blocks || []);
  return blocks;
}
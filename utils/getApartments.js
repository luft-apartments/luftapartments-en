import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";

export const getApartments = async () => {
  const params = {
    query: `
      query ApartmetsQuery() {
        pageBy(uri: "apartments") {
          children {
            nodes {
              uri
              slug
              ... on Page {
                id
                title
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
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
  if (!data.nodeByUri) {
    return null;
  }
  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);
  // const blocks = cleanAndTransformBlocks(data.nodeByUri?.blocks || []);

  return blocks;
}
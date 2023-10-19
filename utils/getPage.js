import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";

export const getPage = async (uri) => {
  const params = {
    query: `
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          __typename
          ... on Page {
            blocks
          }
          ... on Post {
            date
            blocks
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
    next: { revalidate: 60 },
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
export const getSeo = async (uri) => {
  const params = {
    query: `
      query SeoQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          __typename
          ... on Page {
            seo {
              title
              metaDesc
            }
          }
          ... on Post {
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

  return data.nodeByUri.seo;
}
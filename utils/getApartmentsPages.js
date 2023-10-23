export const getApartmentsPages = async () => {
  const params = {
    query: `
      query ApartmentsQuery {
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
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });

  const { data } = await response.json();
  const apartments = data.pageBy.children.nodes;
  return apartments;
}
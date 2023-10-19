const getPageTitles = async () => {
  const params = {
    query: `
      query PageTitlesQuery {
        pages {
          nodes {
            id
            title
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
  return data.pages.nodes;
};

export async function genetatePages() {
  const params = {
    query: `
      query SiteMapQuery {
        pages {
          nodes {
            date
            uri
          }
        }
      }
    `,
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    next: { revalidate: 60 },
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });

  const { data } = await response.json();
  const pagesData = data.pages.nodes;

  return pagesData;
}

export default async function sitemap() {
  const pagesData = await genetatePages();

  const pages = pagesData.map(page => {
    return {
      url: `https://luft-apartments.de${page.uri}`, // Здесь используйте URL, который вы хотите добавить в карту сайта
      lastModified: new Date(page.date), // Устанавливайте дату изменения страницы
      changeFrequency: 'weekly', // Установите частоту изменения по своему усмотрению
      priority: 0.8, // Установите приоритет по своему усмотрению
    };
  });

  return pages;
}
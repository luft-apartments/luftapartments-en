import { mapMainMenuItems } from "./mapMainMenuItems";

export const getMenu = async () => {
  const params = {
    query: `
      query MenuQuery {
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
  return {
    boldText: data.acfOptionsMainMenu.mainMenu.headerDescription.boldText,
    regularText: data.acfOptionsMainMenu.mainMenu.headerDescription.regularText,
    logo: data.acfOptionsMainMenu.mainMenu.logo.sourceUrl,
    mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
  };
}
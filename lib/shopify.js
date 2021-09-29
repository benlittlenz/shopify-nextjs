const domain = process.env.SHOPIFY_STORE_DOMAIN;
const accessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;


async function ShopifyData(query) {
  const URL = `https://${domain}/api/2021-07/graphql.json`

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": accessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch(err) {
    throw new Error("Failed to fetch product")
  }
}

export async function getProducts() {
  const query = `
    {
      products(first: 250) {
        edges {
          node {
            handle
            id
          }
        }
      }
    }
  `;

  const res = await ShopifyData(query);

  return res.data.products || [];
}

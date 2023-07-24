import axios from "axios";
import { load } from "cheerio";

export default defineEventHandler(async (event) => {
  const products = [
    {
      name: "Pokemon 151 Elite Trainer Box",
      websites: [
        {
          url: "https://www.bescards.nl/pokemon-151-elite-trainer-box/",
          selector:
            ".vc_custom_1661771770534 .price ins .woocommerce-Price-amount",
        },
        {
          url: "https://pikaplaza.nl/products/elite-trainer-box-scarlet-violet-151-pre-order/",
          selector: ".product-single .product-single__price",
        },
        // More websites...
      ],
    },
    {
      name: "Pokemon 151 6pk Booster Bundle",
      websites: [
        {
          url: "https://www.bescards.nl/pokemon-151-6pk-booster-bundle/",
          selector:
            ".vc_custom_1661771770534 .price ins .woocommerce-Price-amount",
        },
        {
          url: "https://pikaplaza.nl/products/booster-bundle-scarlet-violet-151-pre-order?_pos=1&_sid=1c417dcaf&_ss=r",
          selector: ".product-single .product-single__price",
        },
        // More websites...
      ],
    },
    // More products...
  ];

  const prices = {};

  const scrapeProductPrice = async ({ url, selector }) => {
    try {
      const { data } = await axios.get(url);
      const $ = load(data);
      const price = $(selector).text();
      return price;
    } catch (error) {
      console.error(`Error scraping ${url}: `, error);
      return null;
    }
  };

  const fetchPrices = async () => {
    for (let product of products) {
      prices[product.name] = {};
      for (let website of product.websites) {
        const price = await scrapeProductPrice(website);
        prices[product.name][website.url] = price;
      }
    }
  };

  fetchPrices();

  return prices;
});

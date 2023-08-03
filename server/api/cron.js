import axios from "axios";
import { load } from "cheerio";
import fs from "fs/promises";

export default defineEventHandler(async () => {
  const products = [
    {
      product: "Elite Trainer Box",
      website: "Bescards",
      url: "https://www.bescards.nl/pokemon-151-elite-trainer-box",
      titleSelector: ".product_title",
      priceSelector:
        ".vc_custom_1661771770534 .price ins .woocommerce-Price-amount",
    },
    {
      product: "Elite Trainer Box",
      website: "PokemonWinkel.nl",
      url: "https://www.pokemonwinkel.nl/collections/pokemon-151/products/pokemon-151-elite-trainer-box",
      titleSelector: "h1 .product-detail__title",
      priceSelector: ".product-price span:first-child span",
    },
    {
      product: "Ultra Premium Collection",
      website: "Cees Cards",
      url: "https://ceescards.eu/products/pokemon-scarlet-violet-151-ultra-premium-collection",
      titleSelector: ".product-meta__title",
      priceSelector: ".product-form__info-content .price",
    },
    {
      product: "Booster Bundle",
      website: "Cees Cards",
      url: "https://ceescards.eu/products/pokemon-scarlet-violet-151-booster-bundle",
      titleSelector: ".product-meta__title",
      priceSelector: ".product-form__info-content .price",
    },
    {
      product: "Elite Trainer Box",
      website: "Cees Cards",
      url: "https://ceescards.eu/products/pokemon-scarlet-violet-151-elite-trainer-box",
      titleSelector: ".product-meta__title",
      priceSelector: ".product-form__info-content .price",
    },
  ];

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const getProductData = async (url, titleSelector, priceSelector) => {
    try {
      const response = await axios.get(url);
      const html = response.data;
      const $ = load(html);
      const title = $(titleSelector).text();
      const price = $(priceSelector).text();
      const cleanPrice = extractAmount(price);
      const cleanTitle = title.replace(/\t|\r|\n/gm, "");
      return { cleanTitle, cleanPrice };
    } catch (error) {
      console.error(`Error scraping ${url}: `, error);
      return null;
    }
  };

  for (const product of products) {
    const tit = await getProductData(
      product.url,
      product.titleSelector,
      product.priceSelector
    );
    Object.assign(product, { title: tit.cleanTitle, price: tit.cleanPrice });

    // wait 5000ms before next iteration
    await delay(5000);
  }

  await fs.writeFile("public/data/data.json", JSON.stringify(products), "utf8");

  function extractAmount(str) {
    // Find the position of the first digit or the Euro symbol
    let startPos = str.search(/[0-9€]/);

    // If no digit or Euro symbol is found, return an error message
    if (startPos === -1) {
      return "No price found";
    }

    // If a Euro symbol was found before a digit, skip it
    if (str[startPos] === "€") {
      startPos++;
    }

    // Extract the part of the string after the first digit or Euro symbol
    let rest = str.slice(startPos);

    // Find the position of the first non-digit, non-comma character
    let endPos = rest.search(/[^0-9,]/);

    // If no such character is found, use the whole string; otherwise, cut at that position
    let amount = endPos === -1 ? rest : rest.slice(0, endPos);

    // Cleanup with trim and replace , with . for parsing float
    let cleanAmount = parseFloat(amount.trim().replace(",", "."));

    // Return the amount
    return cleanAmount;
  }

  return products;
});

// import { load } from "cheerio";
// import { $fetch } from "ofetch";
// import prisma from "../data/prisma";

// import { products } from "../data/products.js";
// import { cleanPrice, delay } from "../utils/utils.js";

// export default defineEventHandler(async () => {
//   const getProductData = async (url, priceSelector) => {
//     try {
//       const response = await $fetch(url);
//       const $ = load(response);
//       const price = $(priceSelector).text();
//       const cleanedUpPrice = cleanPrice(price);
//       return cleanedUpPrice;
//     } catch (error) {
//       console.error(`Error scraping ${url}: `, error);
//       return null;
//     }
//   };

//   // Create an array to store valid products
//   let validProducts = [];
//   const currentDateTime = new Date();

//   for (const product of products) {
//     const price = await getProductData(product.url, product.priceSelector);
//     // If price scraping failed, log this product and skip to next iteration
//     if (price === "No price found") {
//       console.error(`No price found for product: ${product.url}`);
//       continue;
//     }

//     Object.assign(product, {
//       pulled_date: currentDateTime,
//       current_price: price,
//     });

//     delete product.priceSelector;

//     // Add this product to validProducts
//     validProducts.push(product);

//     // wait 1000ms before next iteration
//     await delay(1000);
//   }

//   await prisma.products.createMany({
//     data: validProducts,
//     skipDuplicates: true,
//   });

//   return validProducts;
// });

import prisma from "./prisma";

export async function getItems() {
  console.log(prisma);
  // Find the latest pull date
  // const latestPull = await prisma.products.findFirst({
  //   orderBy: {
  //     pulled_date: "desc",
  //   },
  //   select: {
  //     pulled_date: true,
  //   },
  // });

  // const latestPullDate = latestPull.pulled_date;

  // // Use the latest pull date to find products
  // let products = await prisma.products.findMany({
  //   where: {
  //     AND: [
  //       {
  //         product_categories: {
  //           set_id: 1,
  //         },
  //       },
  //       {
  //         pulled_date: latestPullDate,
  //       },
  //     ],
  //   },
  //   include: {
  //     product_categories: true,
  //     webshops: {
  //       select: {
  //         webshop_name: true,
  //       },
  //     },
  //   },
  // });

  // return products;
}

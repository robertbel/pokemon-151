import { getItems } from "../data/items";

export default defineEventHandler(async () => {
  try {
    return await getItems();
  } catch (error) {
    console.error("JAJAJA ", error);
  }
});

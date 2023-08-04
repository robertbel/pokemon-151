function cleanPrice(str) {
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

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { cleanPrice, delay };

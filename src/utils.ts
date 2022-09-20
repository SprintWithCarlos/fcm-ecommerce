/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */

export const capitalize = (str: any) => {
  if (str && typeof str === "string") {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return "";
};

export const formatter = (currency: string, amount: string | number) => {
  let cleanedAmount: number;
  const hasDecimal = amount.toString().slice(-3).charAt(0).match(/,|\./gm);
  const transform = amount.toString().replace(/[^a-zA-Z0-9 ]/g, "");
  if (hasDecimal) {
    cleanedAmount = parseInt(transform, 10) / 100;
  } else {
    cleanedAmount = parseInt(transform, 10);
  }

  const result = Intl.NumberFormat(undefined, {
    style: "currency",
    currency
  }).format(cleanedAmount);
  return result;
};
const test1 = formatter("GBP", "125,00");
test1;

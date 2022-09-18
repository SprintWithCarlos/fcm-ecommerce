/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */

export const capitalize = (str: string) => {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return "";
};

export const filterByRange = (array: any[], start: number, amount: number): any[] => {
  if (start > array?.length) {
    return [];
  }
  if (amount > array?.length) {
    return array?.slice(start);
  }
  if (start + amount > array?.length) {
    return array?.slice(start, array?.length);
  }
  if (start < 0) {
    return array?.slice(0, amount);
  }
  if (amount < 0) {
    return array?.slice(start, array.length + amount);
  }
  if (start + amount < 0) {
    return array?.slice(0, array.length + amount);
  }
  return array?.slice(start, start + amount);
};

export const paginator = (length: number, amount: number) => {
  if (length) {
    const pages = Math.floor(length / amount);
    const array = [...Array(pages + 1).keys()].map((i) => i + 1);
    return array;
  }
  return [];
};
const result = paginator(87, 10);
result;

export const serialize = (obj: any) => {
  const newObject = {};
  if (obj) {
    const addToObject = (obj: Record<string, any>, key: string, value: any) => {
      obj[key] = value;
    };
    Object.entries(obj).map((entry) =>
      addToObject(newObject, entry[0].split(" ").join("_").toLowerCase(), entry[1])
    );
  }

  return newObject;
};
const formatter = Intl.NumberFormat("en", {
  notation: "compact"
});
const blabla = formatter.format(19999999);

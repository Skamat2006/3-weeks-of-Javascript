/**INSTRUCTIONS
 Create some functions, which each take a string as an argument:

    cutFirst: returns the string with the first 2 characters removed.

    cutLast: returns the string with the last 2 characters removed.

    cutFirstLast: returns the string with the first 2 characters and the last 2 characters removed.

    keepFirst: returns only the first 2 characters.

    keepLast: returns only the last 2 characters.

    keepFirstLast: returns the first 2 characters, and the last 2 characters.
 */

function cutFirst(str) {
  let res = "";
  for (let i = 2; i < str.length; i++) {
    res += str[i];
  }
  return res;
}

function cutLast(str) {
  let res = "";
  for (let i = 0; i < str.length - 2; i++) {
    res += str[i];
  }
  return res;
}

function cutFirstLast(str) {
  let res = "";
  for (let i = 2; i < str.length - 2; i++) {
    res += str[i];
  }
  return res;
}

function keepFirst(str) {
  let res = "";
  if (str.length < 2) {
    return str;
  }
  for (let i = 0; i < 2; i++) {
    res += str[i];
  }
  return res;
}

function keepLast(str) {
  let res = "";
  if (str.length < 2) {
    return str;
  }
  for (let i = str.length - 2; i <= str.length - 1; i++) {
    res += str[i];
  }
  return res;
}

function keepFirstLast(str) {
  let res = "";
  if (str.length < 4) {
    return str;
  }
  res = keepFirst(str) + keepLast(str);

  return res;
}

// console.log(keepFirstLast("01Founders"));
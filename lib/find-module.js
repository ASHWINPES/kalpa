const array = require("lodash/array");

const reservedKeywords = [
  "name",
  "when",
  "if",
  "debug",
  "register",
  "print",
  "loop",
  "main",
  "series",
  "play",
  "var",
  "file",
  "as",
  "ref",
  "include",
  "renderer",
  "preplay",
  "kalpa",
  "vars-file",
];

// take the array of keywords and substract list from reserved keywords this will give the probable module name
const findModule = (arr) => array.difference(arr, reservedKeywords);

exports.findModule = findModule;

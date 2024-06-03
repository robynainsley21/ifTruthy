let mixedArray = [0, 1, false, 2, "", 3, null, "hello", 4, true, "world", true];

const getTruthyValues = (arr) => {
  return arr.filter((value) => (typeof value === "boolean" && value === true));
};

console.log(getTruthyValues(mixedArray).length);

const path = require("path");


const makePath = (f) => {
  return path.join("./dist/", `vue-bi18n.${f}.js`);
};

const base = {
  input: "./index.js"
};

const cjs = {
  output: {
    file: makePath("cjs"),
    format: "cjs"
  }
};

const umd = {
  output: {
    file: makePath("umd"),
    format: "umd",
    name: "VueBi18n"
  }
};

const esm = {
  output: {
    file: makePath("esm"),
    format: "esm"
  }
};

module.exports = [
  { ...base, ...cjs },
  { ...base, ...umd },
  { ...base, ...esm }
];
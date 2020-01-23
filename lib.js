const fs = require("fs").promises;
const path = require("path");

const axios = require("axios");

const config = require("./config");

module.exports = {
  fetchCssUrls,
  localFileExists
};

async function fetchCssUrls(
  cssUrl = config.get("cssUrl"),
  filterFn = () => true
) {
  if (!cssUrl) {
    throw new Error("Missing `cssUrl`");
  }
  const { data: css } = await axios.get(cssUrl);
  let images = css
    .match(/url\((.*?)\)/g)
    .map(url => url.replace(/^url\((.*?)\)$/, "$1"))
    .filter(filterFn)
    .sort();
  // Dedupe images.
  return [...new Set(images)];
}

async function localFileExists(file, publicDir = config.get("publicDir")) {
  if (!file) {
    throw new Error("`file` not defined");
  }
  const fullpath = path.join(publicDir, file);
  return fs.stat(fullpath);
}

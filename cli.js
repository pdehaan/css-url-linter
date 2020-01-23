#!/usr/bin/env node

const config = require("./config");
const lib = require("./lib");

main(config.get("cssUrl"), config.get("publicDir"));

async function main(cssUrl, publicDir) {
  const urls = await lib.fetchCssUrls(cssUrl);
  for (const url of urls) {
    try {
      await lib.localFileExists(url, publicDir);
    } catch (err) {
      console.log(err.message);
      process.exitCode = 1;
    }
  }
}

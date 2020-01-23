const convict = require("convict");

const config = convict({
  cssUrl: {
    doc: "URL to the CSS file to scan.",
    format: "url",
    default: undefined,
    env: "CSS_URL",
    arg: "cssUrl"
  },
  publicDir: {
    doc: "Path to the local assets.",
    format: String,
    default: ".",
    env: "PUBLIC_DIR",
    arg: "publicDir"
  },
  envPath: {
    doc: "Path to the .env config file.",
    format: String,
    default: ".env",
    env: "ENV_PATH",
    arg: "envPath"
  }
});

try {
  const envPath = config.get("envPath");
  if (envPath) {
    config.loadFile(envPath);
  }
} catch (err) {
  // Ignore missing config files.
  console.error(err.message);
}

config.validate({ allowed: "strict" });

module.exports = config;

/* eslint-disable func-names */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "https://darkroastedbeans.coffeeit.nl/coffee-machine",
    createProxyMiddleware({
      target: "http://localhost:3000",
      changeOrigin: true,
    }),
  );
};

const { createProxyMiddleWare } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/ws-stomp",
    createProxyMiddleWare({ target: "ws://localhost:8080", ws: true })
  );
};

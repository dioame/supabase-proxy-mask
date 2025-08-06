// server.js
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "https://eqtmhqidzlkuysbnmqzn.supabase.co",
    changeOrigin: true,
  })
);

app.listen(process.env.PORT || 3000);

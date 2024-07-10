import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { ProxyOptions } from "vite";

const proxyErrorHandler = (err: Error, req: any, res: any) => {
  console.error(`Error in proxy: ${err.message}`);
  res.writeHead(500, {
    "Content-Type": "text/plain",
  });
  res.end("Proxy error");
};

const proxyClientErrorHandler = (err: Error, socket: any) => {
  console.error(`Client error: ${err.message}`);
  socket.destroy();
};

const createProxyConfig = (target: string): ProxyOptions => ({
  target,
  changeOrigin: true,
  secure: false,
  rewrite: (path) => path,
  configure: (proxy) => {
    proxy.on("proxyReq", (proxyReq, req, res) => {
      console.log(`Proxying request to: ${target}${req.url}`);
    });
    proxy.on("proxyRes", (proxyRes, req, res) => {
      console.log(`Received response from: ${target}${req.url}`);
    });
    proxy.on("error", proxyErrorHandler);
    proxy.on("clientError", proxyClientErrorHandler);
  },
});

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/api/Claims": createProxyConfig("http://claimsapi.cip-tech.org"),
      "/api": createProxyConfig("https://clawebsitetest.custodianplc.com.ng"),
    },
  },
});

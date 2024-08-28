import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import child_process from "child_process";
import { env } from "process";

const baseFolder =
  env.APPDATA !== undefined && env.APPDATA !== ""
    ? `${env.APPDATA}/ASP.NET/https`
    : `${env.HOME}/.aspnet/https`;

const certificateName = "cail_website.client";
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
  if (
    0 !==
    child_process.spawnSync(
      "dotnet",
      [
        "dev-certs",
        "https",
        "--export-path",
        certFilePath,
        "--format",
        "Pem",
        "--no-password",
      ],
      { stdio: "inherit" }
    ).status
  ) {
    throw new Error("Could not create certificate.");
  }
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 5173,
    https: {
      key: fs.readFileSync(keyFilePath),
      cert: fs.readFileSync(certFilePath),
    },
    proxy: {
      "/api/Claims": {
        target: "http://claimsapi.cip-tech.org",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/Claims/, "/api/Claims"),
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq, req, res) => {
            console.log(
              `Proxying request to: http://claimsapi.cip-tech.org${req.url}`
            );
          });
          proxy.on("proxyRes", (proxyRes, req, res) => {
            console.log(
              `Received response from: http://claimsapi.cip-tech.org${req.url}`
            );
          });
        },
      },
      "/api": {
        target: "https://clawebsitetest.custodianplc.com.ng",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path, // Ensures the /api prefix is maintained
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq, req, res) => {
            console.log(
              `Proxying request to: https://clawebsitetest.custodianplc.com.ng${req.url}`
            );
          });
          proxy.on("proxyRes", (proxyRes, req, res) => {
            console.log(
              `Received response from: https://clawebsitetest.custodianplc.com.ng${req.url}`
            );
          });
        },
      },
    },
  },
});

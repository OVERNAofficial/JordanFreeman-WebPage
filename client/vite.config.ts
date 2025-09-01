import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "../shared"),
      "@assets": path.resolve(__dirname, "../public/assets"),
    },
  },
  publicDir: path.resolve(__dirname, "../public"), // make sure this is correct if you use public assets
  build: {
    outDir: path.resolve(__dirname, "../dist"), // output to root/dist for Vercel
    emptyOutDir: true,
    assetsDir: "assets",
  },
});

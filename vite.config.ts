import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "public/assets"), // ✅ serve all images/videos from public/assets
    },
  },
  root: path.resolve(__dirname, "client"), // ✅ Vite entry
  publicDir: path.resolve(__dirname, "public"), // ✅ static files
  build: {
    outDir: path.resolve(__dirname, "dist"), // ✅ matches Vercel
    emptyOutDir: true,
    assetsDir: "assets",
  },
});

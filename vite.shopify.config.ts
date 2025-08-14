
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Shopify-specific build configuration
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "assets",
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        entryFileNames: "react-app.js",
        chunkFileNames: "react-app-[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "index.css") {
            return "react-app.css";
          }
          return "react-app-[name].[ext]";
        },
      },
    },
    // Ensure compatibility with Shopify's asset system
    target: "es2015",
    minify: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Define environment variables for Shopify integration
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env.SHOPIFY_INTEGRATION': 'true',
  },
});

import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  base: "/",
  build: {
    // generate manifest.json in outDir
    outDir: path.resolve(__dirname, "dist"),
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: {
        main: path.resolve(__dirname, 'src/main.tsx'),
      }
    },
  },
})

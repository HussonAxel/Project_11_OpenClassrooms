import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from "sass";
import { resolve } from "path";

const root = resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  resolve: {
    alias: {
      "@components": resolve(root, "components"),
      "@assets": resolve(root, "assets"),
      "@pages": resolve(root, "pages"),
      "@routes": resolve(root, "routes"),
      "@sass": resolve(root, "sass"),
      "@utils": resolve(root, "utils"),
      "@data": resolve(root, "data"),
    },
  },
});

import { resolve } from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "./src/components/index.ts"),
      name: "design-system-yagrrusso",
      fileName: (format) => `index.${format}.js`,
    },
    minify: true,
    reportCompressedSize: true,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});

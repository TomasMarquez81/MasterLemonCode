import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";
import tscofigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tscofigPaths(), checker({ typescript: true }), react()],
});
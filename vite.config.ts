import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
// How I configure ts and vite for absolute import - https://stackoverflow.com/a/68250175/18892335
export default defineConfig({
  plugins: [tsconfigPaths()],
  base: "/",
});

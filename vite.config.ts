import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsxInject: `import { tsx } from "@tsx/parser"`,
  },
  plugins: [tsconfigPaths()],
});

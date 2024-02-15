import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $components: "./src/components/*",
      $actions: "./src/actions/*",
      $stores: "./src/stores/*"
    }
  },
  preprocess: vitePreprocess()
};

export default config;

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: "https://pokeapi.co/api/v2/pokemon";
    },
  },
});

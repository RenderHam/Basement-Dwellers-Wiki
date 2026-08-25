import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
  vite: { plugins: [tailwindcss()] },
});

import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
import { HstNuxt } from "@histoire/plugin-nuxt";
import { HstPercy } from "@histoire/plugin-percy";

export default defineConfig({
  plugins: [HstVue(), HstNuxt(), HstPercy({})],
});

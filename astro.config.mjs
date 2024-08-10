import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"
import svelte from "@astrojs/svelte"

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [tailwind({ applyBaseStyles: true }), svelte({})],
})

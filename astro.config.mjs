import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue({
		appEntrypoint: "/src/_app",
		reactivityTransform: true

	})],
  vite:{
    ssr:{
      noExternal: ["splide", "@splidejs/splide"],
    },
  },
});
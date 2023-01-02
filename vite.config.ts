import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import yaml from '@rollup/plugin-yaml'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/tea-by-amana/",
  plugins: [
    svelte(),
    yaml(),
  ]
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: '/' works if this repo is named joshitaarora.github.io (user/org page).
// If you instead deploy as a project page (e.g. github.com/joshitaarora/portfolio),
// change this to '/portfolio/' (match the repo name) so built asset paths resolve correctly.
export default defineConfig({
  plugins: [react()],
  base: '/',
})

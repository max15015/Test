import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use the repository subpath used for GitHub Pages. Adjust if your repo name is different.
  base: '/Digital_Portfolio_RSK/'
})

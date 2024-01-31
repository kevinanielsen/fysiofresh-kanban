import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: "istanbul"
    },
  }
})
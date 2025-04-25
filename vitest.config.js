// vitest.config.js
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['tests/**/*.test.js'], // ou .ts, dependendo do que você usar
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})

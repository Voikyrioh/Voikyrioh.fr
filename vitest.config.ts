import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    // Mock static asset imports in test environment
    {
      name: 'mock-assets',
      enforce: 'pre',
      resolveId(id) {
        if (/\.(webp|png|jpg|gif)$/.test(id)) {
          return '\0mock-asset'
        }
      },
      load(id) {
        if (id === '\0mock-asset') {
          return 'export default ""'
        }
      },
    },
  ],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['src/test-setup.ts'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})

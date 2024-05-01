import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'
import i18nextLoader from 'vite-plugin-i18next-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // https://github.com/alienfast/vite-plugin-i18next-loader
    i18nextLoader({
      paths: ['./src/locales'],
      namespaceResolution: 'basename'
    }),
    // https://unocss.dev/
    UnoCSS()
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'clsx',
      'unocss',
      'tailwind-merge',
      'class-variance-authority'
    ]
  }
})

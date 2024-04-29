import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import i18nextLoader from 'vite-plugin-i18next-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    i18nextLoader({
      paths: ['./src/locales'],
      namespaceResolution: 'basename'
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
})

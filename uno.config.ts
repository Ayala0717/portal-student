import { defineConfig, presetUno } from 'unocss'
import { type UserConfig } from 'vite'

export default defineConfig({
  presets: [presetUno()]
}) as UserConfig

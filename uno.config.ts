import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerVariantGroup
} from 'unocss'
import { presetShadcn } from './preset.shadcn'

export default defineConfig({
  presets: [presetUno(), presetIcons(), presetShadcn()],
  transformers: [transformerVariantGroup()],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center'
    }
  ]
})

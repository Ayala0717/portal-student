import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerVariantGroup
} from 'unocss'
import { presetShadcn } from './preset.shadcn'

export default defineConfig({
  presets: [
    presetUno(),
    presetShadcn(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/'
    })
  ],
  transformers: [transformerVariantGroup()],
  rules: [['max-w-content', { 'max-width': 'fit-content' }]],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center'
    }
  ]
})

import { defineConfig, presetIcons, presetMini } from 'unocss'

export default defineConfig({
  presets: [
    presetMini({
      dark: 'media'
    }),
    presetIcons({
      
    })
  ],
  theme: {
    colors: {
      'primary': '#006BB8',
      
    },
    boxShadow: {
      active: "0px 4px 16px rgba(0, 107, 184, 0.4);",
      
    },
    duration: {
      animation: "400",
    },
    
  },
})
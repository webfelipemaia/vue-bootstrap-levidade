// src/composables/useBackgroundColor.js
import { ref, computed, onMounted } from 'vue'

export default function useBackgroundColor(elementSelector = '.navbar') {
  const backgroundColor = ref('')
  
  const isDark = computed(() => {
    if (backgroundColor.value) {
      const rgb = backgroundColor.value.match(/\d+/g)
      if (rgb) {
        // Fórmula de luminosidade WCAG
        const [r, g, b] = rgb.map(Number)
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
        return luminance < 0.5
      }
    }
    return false
  })

  onMounted(() => {
    const element = document.querySelector(elementSelector)
    if (element) {
      backgroundColor.value = window.getComputedStyle(element).backgroundColor
    }
  })

  return {
    isDark
  }
}
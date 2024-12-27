// vueform.config.(js|ts)

import { InputField } from '@/components/form-generator/'
import { defineConfig } from '@vueform/vueform'
import tailwind from '@vueform/vueform/dist/tailwind'

import en from '@vueform/vueform/locales/en'

export default defineConfig({
  theme: tailwind,
  locales: { en },
  locale: 'en',
  elements: [InputField],
})

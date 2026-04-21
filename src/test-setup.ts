import { config } from '@vue/test-utils'

// Stub v-translate directive: sets el.textContent to the binding arg (the translation key)
config.global.directives = {
  translate: (el, binding) => {
    el.textContent = binding.value ?? ''
  },
}

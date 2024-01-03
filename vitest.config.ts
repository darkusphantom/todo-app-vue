import { defineVitestConfig } from '@nuxt/test-utils/config'
import Vue from '@vitejs/plugin-vue'
import Jsx from '@vitejs/plugin-vue-jsx'

export default defineVitestConfig({
    // plugins: [Vue(), Jsx()],
    test: {
      environment: 'happy-dom',
    },
})
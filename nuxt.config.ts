// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/test-utils/module'
  ],
  // Configuración de los complementos
  plugins: [],

  // Configuración de los componentes globales
  components: [],

  // Configuración de los estilos globales
  css: [],

  // Configuración del directorio de assets
  dir: {
    assets: 'assets',
  },

  devServer: {
    host: '0.0.0.0',
    port: 4200
  }
})


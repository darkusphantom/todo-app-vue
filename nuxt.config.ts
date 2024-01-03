// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Todo App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
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


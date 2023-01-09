// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=400, initial-scale=1',
          title: 'IT OutSource',
          meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: 'My amazing site.' }
          ],
        }
      },
    modules: ['@nuxtjs/tailwindcss']
})

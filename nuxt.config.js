module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Callum Flack digital design & development",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Callum Flack's blog"
      },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@callumflack" },
      { name: "twitter:creator", content: "@callumflack" },
      {
        name: "twitter:image",
        content:
          "https://res.cloudinary.com/pw-img-cdn/image/upload/v1523414125/okok/cfb-favicon.jpg"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress-bar color
  ** loading: { color: "#1f1f1f" },
  ** loading: "~/components/PageLoading.vue",
  */
  loading: { color: "#151515" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
    /*
      cssnext is available by default in Nuxt,
      but there's TWO different methods shown in the docs:
      https://nuxtjs.org/api/configuration-build#postcss
      https://nuxtjs.org/faq/postcss-plugins
      …and both FAIL to load, for e.g., postcss-mixins:
    
      postcss: [require("postcss-mixins")()]
    */
  },
  css: ["~/assets/styles/application.css"],
  plugins: [
    /*{ src: "~/plugins/vue-slick", ssr: false },*/
    /*{ src: "~/plugins/vue-headroom", ssr: false },*/
    /*"~/plugins/vue-fixed-header",*/
    /*"~/plugins/vue-headroom",*/
    "~/plugins/vue-moment"
  ],
  modules: ["nuxtent", ["@nuxtjs/google-tag-manager", { id: "GTM-N5QW77G" }]],
  axios: {
    credentials: false
  },
  generate: {
    routes: [
      // You shouldn't need to include any content routes inside generate.routes
      // as nuxtent handles this for you:
      // https://github.com/nuxt-community/nuxtent-module/issues/104
      "/",
      "/about",
      "/now"
    ]
  },
  router: {
    middleware: "currentPage",
    // FYI: async scrolling docs look diff now:
    // https://router.vuejs.org/en/advanced/scroll-behavior.html
    async scrollBehavior(to, from, savedPosition) {
      setTimeout(() => {
        // Pages using the _page.vue file share a savedPosition as they
        // are all the same page to nuxt
        // This is undesired so to scoll to top instead
        if (to.matched[0] && to.matched[0].name === "page") {
          return window.scrollTo(0, 0);
        }
        const scrollTo = Object.assign(
          {
            x: 0,
            y: 0
          },
          savedPosition
        );
        window.scrollTo(scrollTo.x, scrollTo.y);
      }, 100);
    }
  }
};

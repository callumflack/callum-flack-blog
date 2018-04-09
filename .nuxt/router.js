import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _28b0aaa2 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _71f4d7f3 = () => import('../pages/now.vue' /* webpackChunkName: "pages/now" */).then(m => m.default || m)
const _7a8b61d0 = () => import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */).then(m => m.default || m)
const _6820602c = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _5468ef4b = () => import('../pages/_page.vue' /* webpackChunkName: "pages/_page" */).then(m => m.default || m)



const scrollBehavior = async function(to, from, savedPosition) {
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


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _28b0aaa2,
			name: "index"
		},
		{
			path: "/now",
			component: _71f4d7f3,
			name: "now"
		},
		{
			path: "/blog",
			component: _7a8b61d0,
			name: "blog"
		},
		{
			path: "/about",
			component: _6820602c,
			name: "about"
		},
		{
			path: "/:page",
			component: _5468ef4b,
			name: "page"
		}
    ],
    
    
    fallback: false
  })
}

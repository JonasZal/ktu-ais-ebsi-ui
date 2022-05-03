import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _63384872 = () => interopDefault(import('..\\pages\\issuer.vue' /* webpackChunkName: "pages/issuer" */))
const _37a6b480 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _36038b1e = () => interopDefault(import('..\\pages\\modules.vue' /* webpackChunkName: "pages/modules" */))
const _3097059a = () => interopDefault(import('..\\pages\\success.vue' /* webpackChunkName: "pages/success" */))
const _1a8502a9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/issuer",
    component: _63384872,
    name: "issuer"
  }, {
    path: "/login",
    component: _37a6b480,
    name: "login"
  }, {
    path: "/modules",
    component: _36038b1e,
    name: "modules"
  }, {
    path: "/success",
    component: _3097059a,
    name: "success"
  }, {
    path: "/",
    component: _1a8502a9,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

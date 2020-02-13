// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false

/* eslint-disable no-new */
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#todo-app-vue',
    render: r => r(App)
  } 
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];
const Vue = require('nativescript-vue');
const Vuex = require('vuex');
const user = require('./modules/user');
const products = require('./modules/products');
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
  modules: {
    user,
    products,
  },
  strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;
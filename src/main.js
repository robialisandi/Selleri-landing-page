import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'popper.js'
import '../node_modules/popper.js/dist/popper'
import 'slick-carousel'
import '../node_modules/slick-carousel/slick/slick'

import LoadScript from 'vue-plugin-load-script'

Vue.config.productionTip = false

Vue.use(LoadScript)

new Vue({
  render: h => h(App),
}).$mount('#app')

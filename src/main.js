import Vue from 'vue'
import App from './App.vue'

import Welcome from './components/Welcome'
import Special from './components/Special'
import Features from './components/Features'
import CoolFacts from './components/CoolFacts'
import ScreenShoot from './components/ScreenShoot'
import Pricing from './components/Pricing'
import Feedback from './components/Feedback'
import Cta from './components/CTA'
import OurTeam from './components/OurTeam'
// import Contact from './components/Contact'

Vue.config.productionTip = false

Vue.component('welcome', Welcome)
Vue.component('special', Special)
Vue.component('features', Features)
Vue.component('coolFacts', CoolFacts)
Vue.component('screenShoot', ScreenShoot)
Vue.component('pricing', Pricing)
Vue.component('feedback', Feedback)
Vue.component('cta', Cta)
Vue.component('OurTeam', OurTeam)

new Vue({
  render: h => h(App),
}).$mount('#app')

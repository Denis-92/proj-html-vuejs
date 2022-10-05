import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faTwitter,
  faInstagram,
  faBehance,
  faDribbble,
  faFlickr,
  faGit,
  faLinkedin,
  faPinterest
} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
  faTwitter,
  faInstagram,
  faBehance,
  faDribbble,
  faFlickr,
  faGit,
  faLinkedin,
  faPinterest
)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
/* end config font awesome ------------- */


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
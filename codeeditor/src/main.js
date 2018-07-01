import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
//import VueCodemirror from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'
import 'iview/dist/styles/iview.css';

import VueCodemirror from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'

// require more codemirror resource...

// you can set default global options and events when use
Vue.use(VueCodemirror,
  /* { 
  options: { theme: 'base16-dark', ... },
  events: ['scroll', ...]
} */
)

Vue.config.productionTip = false

Vue.use(iView);

new Vue({
  render: h => h(App)
}).$mount('#app')
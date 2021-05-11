import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Form, Button, Field } from 'vant'
import 'vant/lib/index.less'

import FileHandle from '@/index'
Vue.use(FileHandle)
Vue.config.productionTip = false

Vue.use(Form)
Vue.use(Button)
Vue.use(Field)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

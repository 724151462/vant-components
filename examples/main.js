import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Form,
  Button,
  Field,
  Cell,
  CellGroup,
  Popup,
  DatetimePicker,
  Radio,
  RadioGroup
} from 'vant'
import 'vant/lib/index.less'

import FileHandle from '@/index'
Vue.use(FileHandle)
Vue.config.productionTip = false

Vue.use(Form)
Vue.use(Button)
Vue.use(Field)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Popup)
Vue.use(DatetimePicker)
Vue.use(Radio)
Vue.use(RadioGroup)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

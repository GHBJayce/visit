import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import moment from 'moment'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AoComponents from 'ao-components'

const app = createApp(App)
app.use(moment)
app.use(Antd)
app.use(VueAxios, axios)
app.use(AoComponents)
app.mount('#app')
import './mock'
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import './styles/global.scss'
import './utils/globalComponents'
import router from "@/router";
import './eventBus'
import store from "./store";
store.dispatch('setting/fetchSetting')

import {showMessage} from "@/utils/showMessage";


Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$showMessage = showMessage;

import vLoading from './directives/loading'
import vLazy from './directives/lazy'
Vue.directive('loading', vLoading)
Vue.directive('lazy', vLazy)

Vue.config.devtools = true

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index'
import addTotoModal from './components/shared/addTodoModal.vue'
import deleteModal from './components/shared/deleteModal.vue'
import store from './store/'

Vue.config.productionTip = false
Vue.component('app-modal-add-todo', addTotoModal)
Vue.component('app-modal-delete-todo', deleteModal)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

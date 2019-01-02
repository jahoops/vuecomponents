import Vue from 'vue'
import App from './App.vue';
import vSelectPage from 'v-selectpage';

var options2 = [
  { id: 1, name: 'chocolate 2', desc: 'Chocolate 2' },
  { id: 2, name: 'strawberry 2', desc: 'Strawberry 2' },
  { id: 3, name: 'vanilla 2', desc: 'Vanilla 2' }
];

Vue.use(vSelectPage);

var vm = new Vue({
  render: h => h(App)
}).$mount('#app');

//vm.$children[0].$children[0].data = options2;
Vue.set(vm.$children[0].$children[0], 'list', options2);
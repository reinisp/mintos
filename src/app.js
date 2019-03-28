import Vue from 'vue';
import components from './components';
import VueRx from 'vue-rx'

Vue.use(VueRx);

new Vue({
  el: '#app',
  components,
});

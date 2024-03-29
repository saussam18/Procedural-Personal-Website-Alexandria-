import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import jquery from 'jquery';
require('bootstrap')
require('jquery.easing')

require('bootstrap/dist/css/bootstrap.css')
require('devicons/css/devicons.css')
require('@fortawesome/fontawesome-free/css/all.min.css')
require('./assets/css/resume.css');
require('./assets/js/form-submission-handler.js');

Vue.prototype.jquery = jquery;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

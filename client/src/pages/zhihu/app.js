import Vue from 'vue'
import Fastclick from 'fastclick'
import './app.scss'
import App from './app.vue'
import 'iview/dist/styles/iview.css';

Fastclick.attach(document.body)

new Vue({
  el: '#app',
  render: h => h(App)
})

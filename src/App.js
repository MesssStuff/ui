import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './ButtonGroup.vue'

Vue.component('mug-button', Button)
Vue.component('mug-icon', Icon)
Vue.component('mug-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading: true
  }
})
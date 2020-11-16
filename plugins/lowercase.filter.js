import Vue from 'vue'

const filter = string => string.toLowerCase()

Vue.filter('lowercase', filter)

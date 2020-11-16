import Vue from 'vue'

const filter = string => string[0].toUpperCase() + string.slice(1)

Vue.filter('capitalize', filter)

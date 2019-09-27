import Vue from 'vue'
import moment from 'moment'

let util = {
  data: {
    loader: false
  },

  getFormatedPrice (value) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value)
  },

  getDate (val) {
    if (!val) return
    return moment(val).format('DD.MM.Y')
  },

  startLoader () {
    if (!this.data.loader) { this.data.loader = Vue.$loading.show() }
  },

  stopLoader () {
    this.data.loader.hide()
    this.data.loader = false
  },

  randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

}

Vue.prototype.$util = util

export default util

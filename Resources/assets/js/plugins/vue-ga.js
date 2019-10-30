import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import config from '~/config'
import router from '~/router'

const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics, {
    id: config.ga,
    router,
    // debug: {
    //     enabled: !isProd,
    //     sendHitTask: isProd,
    // }
})

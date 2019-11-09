import store from '~/store'

export default (to, from, next) => {
    next()
    // if (store.getters['auth/user'] && store.getters['auth/user'].role !== 'admin') {
    //   next({ path: '/customers' })
    // } else {
    //   next()
    // }
}

import store from '~/store'

export default (to, from, next) => {
  let permission = {
    'admin': true,
    'mod': true
  }
  let role = store.getters['auth/user'].role

  if (role in permission) {
    next()
  } else {
    next({ path: '/customers' })
  }
}

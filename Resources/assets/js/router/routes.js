
// const Login = () => import('~/pages/auth/login').then(m => m.default || m)
// const Register = () => import('~/pages/auth/register').then(m => m.default || m)
// const PasswordEmail = () => import('~/pages/auth/password/email').then(m => m.default || m)
// const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)

const NotFound = () => import(__dirname + '/../pages/errors/404').then(m => m.default || m)
const Welcome = () => import(__dirname + '/../pages/welcome').then(m => m.default || m)
const Home = () => import(__dirname + '/../pages/home').then(m => m.default || m)

export default [
  { path: '/ytc', name: 'welcome.redirect', component: Welcome, redirect: { name: 'welcome' } },
  { path: '/ytc/home', name: 'home', component: Home },
  { path: '/ytc/welcome', name: 'welcome', component: Welcome },

  { path: '/ytc/login', name: 'login', component: () => import(__dirname + '/../pages/auth/login').then(m => m.default || m) },

  { path: '*', component: NotFound }
]

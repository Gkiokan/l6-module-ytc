
// const Login = () => import('~/pages/auth/login').then(m => m.default || m)
// const Register = () => import('~/pages/auth/register').then(m => m.default || m)
// const PasswordEmail = () => import('~/pages/auth/password/email').then(m => m.default || m)
// const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)

const NotFound = () => import(__dirname + '/../pages/errors/404').then(m => m.default || m)

// helper
function loadTemplate(pre, page){
    // return () => import(__dirname + '/../pages/' + pre + page).then(m => m.default || m)
    return () => import('~/pages/' + pre + page).then(m => m.default || m)
}
function loadPage(page){
    return loadTemplate('', page)
}

function loadError(page){
    return loadTemplate('errors/', page)
}

// page routes
import pages from './pages'

// core routes
let coreRoutes = [
  { path: '/ytc', redirect: { name: 'home' } },
  { path: '/ytc/login', name: 'login', component: loadPage('auth/login') },
  { path: '*', component: loadPage('errors/404') }
]

// help
let routes = []
routes.push(...pages, ...coreRoutes)

// console.log(routes)

export default routes

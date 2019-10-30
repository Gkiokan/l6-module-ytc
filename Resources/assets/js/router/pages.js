import pages from '~/config/routes'

let routes = []

pages.map( route => {
    let name = route.path.name
    let o = { 
        path: '/ytc/' + name,
        name:  name,
        component: () => import(/* webpackChunkName: "pages/[name]" */ __dirname + '/../pages/' + name).then(m => m.default || m)
    }
    routes.push(o)
})

export default routes

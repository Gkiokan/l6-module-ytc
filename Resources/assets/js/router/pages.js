import pages from '~/config/routes'

let routes = []

pages.map( route => {
    let name = route.path.name
    let path = route.path.path ? route.path.path : name
    let component = route.component ? route.component : name
    let o = { 
        path: '/ytc/' + path,
        name:  name,
        component: () => import(/* webpackChunkName: "pages/[name]" */ __dirname + '/../pages/' + component).then(m => m.default || m)
    }
    routes.push(o)
})

export default routes

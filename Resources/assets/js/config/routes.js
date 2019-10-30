export default [
    {
        title: 'Home',
        path: { name: 'home' },
        inNav: true,
    }, 
    {
        title: 'Search',
        path: { name: 'search' },
        inNav: true,
    }, 
    {
        title: 'Search',
        path: { name: 'search.video', path: 'search/:video' },
        component: 'search',
        inNav: false,
    }, 
    {
        title: 'Gallery',
        path: { name: 'gallery' },
        inNav: true,
    }, 
    {
        title: 'About',
        path: { name: 'about' },
        inNav: true,
    }, 
]

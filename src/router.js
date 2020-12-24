import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CBL from './components/cbl.vue'
import Login from './views/login.vue'
import Zhuce from './views/zhuce.vue'
import Shouye from './views/shouye.vue'
import Huihua from './views/huihua.vue'
import Fangke from './views/fangke.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/CBL',
            name: 'CBL',
            component: CBL
        }, {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/Zhuce',
            name: 'Zhuce',
            component: Zhuce
        },
        {
            path: '/Shouye',
            name: 'Shouye',
            component: Shouye
        },
        {
            path: '/Huihua',
            name: 'Huihua',
            component: Huihua
        },
        {
            path: '/Fangke',
            name: 'Fangke',
            component: Fangke
        }



    ]
})
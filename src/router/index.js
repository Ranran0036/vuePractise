
import VueRouter from 'vue-router';

import MyAbout from '../pages/MyAbout'
import MyHome from '../pages/MyHome'
import HomeNews from '../pages/HomeNews'
import HomeMessage from '../pages/HomeMessage'

export const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        { 
            name: 'MyAbout',
            path: '/MyAbout', 
            component: MyAbout 
        },
        { 
            name: 'MyHome',
            path: '/MyHome', 
            component: MyHome,
            children : [
                {
                    name : 'HomeMessage',
                    path : 'HomeMessage',
                    component : HomeMessage
                },
                {
                    name : 'HomeNews',
                    path : 'HomeNews',
                    component : HomeNews
                }
            ]
        }
    ]
});
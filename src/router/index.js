
import VueRouter from 'vue-router';

import MyAbout from '../pages/MyAbout'
import MyHome from '../pages/MyHome'
import HomeNews from '../pages/HomeNews'
import HomeMessage from '../pages/HomeMessage'
import MessageDetial from '../pages/MessageDetial'

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
                    component : HomeMessage,
                    children : [
                        {
                            name : 'MessageDetial',
                            path : 'MessageDetial',
                            component : MessageDetial,
                            props({query}){
                                return {
                                    id : query.id,
                                    title : query.title
                                }
                            }
                        }
                    ]
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
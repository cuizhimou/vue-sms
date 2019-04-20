// 入口文件
import Vue from 'vue'

//1.1 导入路由包
import VueRouter from 'vue-router'
//1.2 安装路由
Vue.use(VueRouter)

//2.1导入vue-resource
//2.2安装vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入 MUI 的样式
import './lib/mui/css/mui.min.css'

//按需导入minu-ui中的组件
import { Header,Swipe,SwipeItem} from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//1.3导入自己的router.js路由模块
import router from './router.js'

//导入App根组件
import app from './App.vue'

var vm = new Vue(
    {
        el: '#app',
        render: c => c(app),
        router //1.4挂在路由对象到vm实例上
    }
)
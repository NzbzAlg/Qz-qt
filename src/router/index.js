import Vue from 'vue'
import Router from 'vue-router'
// 登陆
const Login = () => import('@/login/login.vue')
// 首页
const Index = () => import('@/view/index.vue')
const Indexx = () => import('@/view/indexx.vue')
// 采集任务
const Pick = () => import('@/view/mydata/pick.vue')
const Dataorder = () => import('@/view/mydata/dataorder.vue')
const Dataikon = () => import('@/view/mydata/dataikon.vue')
const Fiexikon = () => import('@/view/mydata/fiexikon.vue')
const Datarepo = () => import('@/view/mydata/datarepo.vue')
const Createtask = () => import('@/view/mydata/createtask.vue')
const Rwpoint = () => import('@/view/mydata/rwpoint.vue')
const Ddpoint = () => import('@/view/mydata/ddpoint.vue')
const Ikonpoint = () => import('@/view/mydata/ikonpoint.vue')
const Dataikonpoint = () => import('@/view/mydata/dataikonpoint.vue')
const Fiexpoint = () => import('@/view/mydata/fiexpoint.vue')
// 数据画像分析
const Userikon = () => import('@/view/mydata/taks/ikon/userikon.vue')
const Appanalysis = () => import('@/view/mydata/taks/ikon/appanalysis.vue')
const Regionikon = () => import('@/view/mydata/taks/ikon/regionikon.vue')
const Fineryikon = () => import('@/view/mydata/taks/ikon/fineryikon.vue')
const Winetourikon = () => import('@/view/mydata/taks/ikon/winetourikon.vue')
const Dietikon = () => import('@/view/mydata/taks/ikon/dietikon.vue')
// 固定画像分析
const User1 = () => import('@/view/mydata/taks/fiex/user.vue')
const App = () => import('@/view/mydata/taks/fiex/app.vue')
const Caddress = () => import('@/view/mydata/taks/fiex/caddress.vue')
const Fushi = () => import('@/view/mydata/taks/fiex/fushi.vue')
const Kequn = () => import('@/view/mydata/taks/fiex/kequn.vue')
const Canyin = () => import('@/view/mydata/taks/fiex/canyin.vue')
const Jiaju = () => import('@/view/mydata/taks/fiex/jiaju.vue')
const Datafiexpoint = () => import('@/view/mydata/datafiexpoint.vue')
const Hgrw = () => import('@/view/mydata/hgrw.vue')
const Fbrw = () => import('@/view/mydata/fbrw.vue')
const Cxjg = () => import('@/view/datamarket/cxjg.vue')
const Lqrenwu = () => import('@/view/datamarket/lqrenwu.vue')
const Rwhuigou = () => import('@/view/datamarket/rwhuigou.vue')
const User = () => import('@/view/user/user.vue')
const Financialcenter = () => import('@/view/finance/financialcenter.vue')
const Sjtj = () => import('@/view/mydata/sjtj.vue')
// 数据市场
const Datamarket = () => import('@/view/datamarket/datamarket.vue')
const Taskmarket = () => import('@/view/datamarket/taskmarket.vue')
// 终端管理
const Pickzd = () => import('@/view/zdboard/pickzd.vue')
const Groupinggl = () => import('@/view/zdboard/groupinggl.vue')
//下级代理商
const Agent = () => import('@/view/xj/agent.vue')
const Lowertasks = () => import('@/view/xj/lowertasks.vue')
const Lowerend = () => import('@/view/xj/lowerend.vue')
const AllLowerend = () => import('@/view/xj/allLowerend.vue')

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        // 首页
        {
          path: 'indexx.vue',
          component: Indexx
        },
        // 我的数据
        {
          path: 'pick.vue',
          component: Pick,
          children: [
            // {
            //   path:'allqb.vue',
            //   component:Allqb
            // },
            // {
            //   path:'ywc.vue',
            //   component:Ywz
            // },
            // {
            //   path:'wwc.vue',
            //   component:Wwz
            // },
            // {
            //   path:'zjrw.vue',
            //   component:Zjrw
            // },
            // {
            //   path:'ptrw.vue',
            //   component:Ptrw
            // }
          ]
        },
        {
          path: 'dataorder.vue',
          component: Dataorder
        },
        {
          path: 'dataikon.vue',
          component: Dataikon
        },
        {
          path: 'fiexikon.vue',
          component: Fiexikon
        },
        {
          path: 'datarepo.vue',
          component: Datarepo
        },
        {
          path: 'createtask.vue',
          component: Createtask
        },
        {
          path: 'rwpoint.vue',
          component: Rwpoint
        },
        {
          path: 'ddpoint.vue',
          component: Ddpoint
        },
        {
          path: 'ikonpoint.vue',
          component: Ikonpoint,
          children: [{
              path: 'userikon.vue',
              component: Userikon
            },
            {
              path: 'appanalysis.vue',
              component: Appanalysis
            },
            {
              path: 'regionikon.vue',
              component: Regionikon
            },
            {
              path: 'fineryikon.vue',
              component: Fineryikon
            },
            {
              path: 'winetourikon.vue',
              component: Winetourikon
            },
            {
              path: 'dietikon.vue',
              component: Dietikon
            }
          ]
        },
        {
          path: 'dataikonpoint.vue',
          component: Dataikonpoint
        },
        {
          path: 'fiexpoint.vue',
          component: Fiexpoint,
          children: [{
              path: 'user.vue',
              component: User1
            },
            {
              path: 'app.vue',
              component: App
            },
            {
              path: 'caddress.vue',
              component: Caddress
            },
            {
              path: 'fushi.vue',
              component: Fushi
            },
            {
              path: 'kequn.vue',
              component: Kequn
            },
            {
              path: 'canyin.vue',
              component: Canyin
            },
            {
              path: 'jiaju.vue',
              component: Jiaju
            }
          ]
        },
        {
          path: 'datafiexpoint.vue',
          component: Datafiexpoint
        },
        {
          path: 'hgrw.vue',
          component: Hgrw
        },
        {
          path: 'fbrw.vue',
          component: Fbrw
        },
        {
          path: 'sjtj.vue',
          component: Sjtj
        },
        // 数据市场
        {
          path: 'datamarket.vue',
          component: Datamarket
        },
        {
          path: 'taskmarket.vue',
          component: Taskmarket
        },
        {
          path: 'cxjg.vue',
          component: Cxjg
        },
        {
          path: 'rwhuigou.vue',
          component: Rwhuigou
        },
        {
          path: 'lqrenwu.vue',
          component: Lqrenwu
        },
        // 终端管理
        {
          path: 'pickzd.vue',
          component: Pickzd
        },
        {
          path: 'groupinggl.vue',
          component: Groupinggl
        },
        //下级代理商
        {
          path: 'agent.vue',
          component: Agent
        },
        {
          path: 'lowertasks.vue',
          component: Lowertasks
        },
        {
          path: 'lowerend.vue',
          component: Lowerend
        },
        {
          path: 'allLowerend.vue',
          component: AllLowerend
        },
        // 基本信息
        {
          path: 'user.vue',
          component: User
        },
        // 财务信息
        {
          path: 'financialcenter.vue',
          component: Financialcenter
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
 
    if (token !== token || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});
export default router;

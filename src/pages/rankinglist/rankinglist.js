import Vue from 'vue'
import App from './page1.vue'
import router from './router.js'
// import store from '../../store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import '../../assets/css/comm.css'
import '../../assets/fontface/iconfont.css'
import '../../assets/js/common.js'
import VueI18n from 'vue-i18n'
import "es6-promise-polyfill"
import en from '../../i18n/en.json'
import cn from '../../i18n/cn.json'
import jp from '../../i18n/ja-jp.json'
import bur from '../../i18n/bur.json'
import cam from '../../i18n/cam.json'
import kor from '../../i18n/ko-kr.json'
import thh from '../../i18n/th-th.json'
import vin from '../../i18n/vi-vn.json'
import hk from '../../i18n/zh-hk.json'
import ge from '../../i18n/ge.json'
import ma from '../../i18n/ma.json'
import ph from '../../i18n/ph.json'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
Vue.use(ElementUI, { size: 'small' })
Vue.use(VueI18n)
Vue.config.lang = sessionStorage.getItem('lang') || 'zh-cn'
Vue.locale('zh-cn', {...zhLocale, ...cn })
Vue.locale('en', {...enLocale, ...en })
Vue.locale('ja-jp', {...enLocale, ...jp })
Vue.locale('bur', {...enLocale, ...bur })
Vue.locale('cam', {...enLocale, ...cam })
Vue.locale('ko-kr', {...enLocale, ...kor })
Vue.locale('th-th', {...enLocale, ...thh })
Vue.locale('vi-vn', {...enLocale, ...vin })
Vue.locale('zh-hk', {...enLocale, ...hk })
Vue.locale('ge', {...enLocale, ...ge })
Vue.locale('ma', {...enLocale, ...ma })
Vue.locale('ph', {...enLocale, ...ph })

Vue.config.productionTip = false




new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
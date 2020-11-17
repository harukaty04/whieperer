import Vue from 'vue'
import App from './App.vue'
import router from './router'

//使いたいアイコンを登録するためのlibraryをインポート
import { library } from '@fortawesome/fontawesome-svg-core'
//今回使用する３つのアイコンをインポート
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//インポートしたアイコンをlibraryに登録
library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)
//アイコンを表示するためにFontAwesomeIconをインポートしfaで呼べるよう設定
Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

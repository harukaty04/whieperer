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

import { firestorePlugin } from 'vuefire'          
import firebase from 'firebase'     
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({                
  apiKey: "AIzaSyC2mX98pbfKjSKj0e9V001AUPxuz98I2wc",
  authDomain: "firstproject-460b2.firebaseapp.com",
  databaseURL: "https://firstproject-460b2.firebaseio.com",
  projectId: "firstproject-460b2",
  storageBucket: "firstproject-460b2.appspot.com",
  messagingSenderId: "700969902108",
  appId: "1:700969902108:web:54fe61fa4082b1d4923fd9"
})

export const db = firebase.firestore()
export const auth = firebase.auth()
// ここまで追加
//アイコンを表示するためにFontAwesomeIconをインポートしfaで呼べるよう設定
Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

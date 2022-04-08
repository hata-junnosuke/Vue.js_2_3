//このファイルはエントリーポイントでvueを読み込んだりすることを行える
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false //これをtrueにするとコンソールで「今は開発環境です。本番にはコンパイルしてください。」の表示がされるようになる。

new Vue({
  render: h => h(App),//描画関数（公式で気になれば探してみて）
}).$mount('#app')//仮想DOMの指定

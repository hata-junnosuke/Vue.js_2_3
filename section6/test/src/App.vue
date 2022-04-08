<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TestCompornent></TestCompornent>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'//importするファイルは頭文字も大文字な点に注意
import TestCompornent from './modules/TestCompornent.vue'

export default {
  name: 'App',
  components: {//読み込むファイルを指定してあげる必要がある。ここで指定するとHTMLでも使うことができる
    HelloWorld,
    TestCompornent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

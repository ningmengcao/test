<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld></HelloWorld>
    <test01></test01>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'// 引用组件
import test01 from './test01/test01'
export default {
  name: 'app',
  components: {
    HelloWorld,
    test01
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

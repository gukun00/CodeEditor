<template>
  <div id="app">
    <CodeMirror/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import CodeMirror from "./components//CodeMirror";

export default {
  name: "app",
  components: {
    CodeMirror
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

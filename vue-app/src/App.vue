<template>
  <div id="app">
    <MenuLogoes />
    </div>
</template>

<script>
import MenuLogoes from './components/MenuLogoes.vue'

export default {
  name: 'App',
  components: {
    MenuLogoes
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
}
</style>

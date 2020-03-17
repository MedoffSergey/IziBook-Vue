<template>
  <div id="app">
    <v-main-wrapper />
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper'
export default {
  name: 'app',
  components: {
    vMainWrapper
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto',sans-serif ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscsale;
  text-align: center;
  font-size: 14px;
  max-width: 1366px;
  margin: 0 auto;
  background-color: #fff;
};


</style>

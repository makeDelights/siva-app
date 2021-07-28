<template>
  <div id="wrapper">
    <Tabs />
    <router-view />
  </div>
</template>

<script>
import Tabs from "./components/Tabs.vue";
export default {
  components: {
    Tabs,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#wrapper {
  max-width: 750px;
  margin: 0 auto;
  background-color: lightgray;
  min-height: 100vh;
}
a {
  font-weight: bold;
  color: inherit;
  text-decoration: none;
}
</style>

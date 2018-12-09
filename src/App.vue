<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="sass">
@import "./assets/css/iconfont.css"

html
  font-family: "Arial", no-Serif

body
  position: absolute
  top: 0
  bottom: 0
  right: 0
  left: 0
  overflow: hidden

i
  display: inline-block

ul
  margin: 0
  padding: 0
  list-style-type: none

#app
  width: 100%
  height: 100%
  background: linear-gradient(135deg, #2C2B4A 0, #211F39 100%)
  overflow: hidden


</style>

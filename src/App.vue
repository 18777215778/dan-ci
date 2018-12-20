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
@import "assets/font/iconfont.css"
@import "./assets/sass/main.sass"

html
  font-family: "Arial", no-Serif

html
  font-size: 10px

body
  position: absolute
  top: 0
  bottom: 0
  right: 0
  left: 0
  font-size: 1.6rem
  line-height: 1em
  user-select: none
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
  background: linear-background(135deg, $main-light-color-1, $main-deep-color-1)
  overflow: hidden

</style>

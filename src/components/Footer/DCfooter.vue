<template>
  <div class="footer">
    <DCProgressBar :completed="1000" :sum="2000"/>
    <DCMenu/>
  </div>
</template>

<script>
  import DCProgressBar from "../ProgressBar/DCprogressBar"
  import DCMenu from "../Menu/DCMenu"

  export default {
    name: "DCFooter",
    components: {
      DCProgressBar,
      DCMenu
    }
  }
</script>

<style lang="sass" scoped>

.footer
  display: flex
  flex-flow: column nowrap
  justify-content: space-evenly
  width: 65%
  min-width: 1000px
  height: 200px


</style>
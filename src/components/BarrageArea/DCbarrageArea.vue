<template>
  <div
    class="barrage-area"
    @openWin="openWin"
  >

  </div>
</template>

<script>
  export default {
    name: "DCBarrageArea",
    created: function () {
      this.$nextTick(function () {
        this.$cartridge.send({type: "1", content: "like"})
      });
    },
    methods: {
      openWin: function (options) {
        console.log(options);
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/main.sass"

  .barrage-area
    position: relative
    z-index: -8
    width: 100%
    height: 100%
</style>
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
  mounted: function() {
    this.$cartridge.send({type: "1", content: "like", vue: this});
    this.$cartridge.send({type: "2", content: "cartridge", vue: this});
  },
  methods: {
    openWin: function(option) {
      console.log(option);
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/main.sass"

.barrage-area
  position: relative
  z-index: -8
  width: 100%
  height: 100%
</style>

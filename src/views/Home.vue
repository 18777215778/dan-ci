<template>
  <div class="home">
    <DCHeader/>
    <DCBarrageArea/>
    <DCFooter/>
  </div>
</template>

<script>
import DCHeader from "../components/Header/DCheader";
import DCBarrageArea from "../components/BarrageArea/DCbarrageArea"
import DCFooter from "../components/Footer/DCfooter"

export default {
  name: "DCHome",
  components: {
    DCHeader,
    DCBarrageArea,
    DCFooter
  }
};
</script>

<style lang="sass" scoped>
.home
  position: relative
  z-index: -9
  display: flex
  flex-flow: column nowrap
  align-items: center
  flex: 1
  width: 100%
  height: 100%

</style>

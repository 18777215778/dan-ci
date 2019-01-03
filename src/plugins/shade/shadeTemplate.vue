<template>

  <div :class="['shade', type]"></div>
</template>

<script>
  export default {
    name: "shade",
    props: {
      type: {
        type: String,
        default: "transparent",
        validator: function (value) {
          // 根据传入值使用对应的遮罩层样式
          let shadeStyle = ["transparent", "white", "black"];

          if (shadeStyle.indexOf(value) !== -1) {
            return value
          }
          else {
            return shadeStyle[0];
          }
        }
      }
    }
  }
</script>

<style lang="sass" scoped>

  @import "../../assets/sass/main.sass"

  .shade
    @include overspread

  .transparent
    background-color: transparent

  .white
    background-color: rgba(255,255,255,0.3)

  .black
    background-color: rgba(0,0,0,0.3)

</style>
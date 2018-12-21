<template>
  <div
    class="cartridge"
    :style="styleAttr"
    @click="openWin"
    @animationEnd="toDie"
  >
    <span class="icon">{{ icon }}</span>
    <span class="content">{{ content }}</span>
  </div>
</template>

<script>
  export default {
    name: "DCCartridgeTemplate",
    props: {
      type: {
        type: String
      },
      icon: {
        type: String
      },
      content: {
        type: String
      },
      isClickable: {
        type: Boolean,
        default: true
      },
      styleAttr: {
        type: Object
      }
    },
    methods: {
      openWin: function () {
        this.$emit(openWin, {
          type: this.type,
          icon: this.icon,
          content: this.content,
          isClickable: this.isClickable
        })
      },
      toDie: function () {
        console.log("动画结束！");
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import "../../assets/sass/main.sass"

  .cartridge
    position: absolute
    right: -50vw
    display: flex
    align-items: center
    border-radius: 3em
    background: linear-background(90deg,$main-light-color-2,$main-deep-color-2)
    font-size: 1.8rem
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.1)
    animation: cartridge-anim linear
    will-change: right
    cursor: pointer

    &:hover
      animation-play-state: paused

    .icon
      display: flex
      justify-content: center
      align-items: center
      margin: 3px
      width: 32px
      height: 32px
      background-color: rgba(35,34,54,0.5)
      border-radius: 32px
      transition: transform 200ms cubic-bezier(.38,1.01,.45,2.5)

    &:hover .icon
      transform: scale(1.2)

    .content
      display: block
      padding-left: .5em
      padding-right: 1em
      color: #F8F8F8
      font-size: 1.8rem

  @keyframes cartridge-anim
    to
      right: 150vw
</style>
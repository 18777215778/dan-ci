<template>
  <div class="menu">
    <DCOption
      class="option"
      @openURL="openURL"
      url="边听边学"
    >
      <span class="option--icon" slot="icon">🎧</span>
      <span class="option--text" slot="text">边听边学</span>
    </DCOption>
    <DCOption
      class="option"
      @openURL="openURL"
      url="挑战"
    >
      <span class="option--icon" slot="icon">🏆</span>
      <span class="option--text" slot="text">挑战</span>
    </DCOption>
    <button
      class="start-learn animated rubberBand"
      @click="startLearn"
    >📖 开始学习</button>
    <DCOption
      class="option"
      @openURL="openURL"
      url="书库"
    >
      <span class="option--icon" slot="icon">📚</span>
      <span class="option--text" slot="text">书库</span>
    </DCOption>
    <DCOption
      class="option"
      @openURL="openURL"
      url="统计"
    >
      <span class="option--icon" slot="icon">📊</span>
      <span class="option--text" slot="text">统计</span>
    </DCOption>
  </div>
</template>

<script>
  import DCOption from "./Option/DCOption"
  export default {
    name: "DCMenu",
    components: {
      DCOption
    },
    methods: {
      openURL: function (ev) {
        console.log(ev)
      },
      startLearn: function () {
        this.$vagueShade.shade('#app');
      }
    }
  }
</script>

<style lang="sass" scoped>
@import "../../assets/sass/main.sass"

.menu
  display: flex
  justify-content: space-around
  align-items: center

.start-learn
  padding: 10px 25px
  border: 3px solid #211f36
  border-radius: 4em
  background: linear-background(0deg, $main-deep-color-3, $main-light-color-3)
  font-size: 2rem
  font-weight: bold
  color: $tress-deep-color
  outline: none
  cursor: pointer
  /*filter: grayscale(100%)*/

  &:active
    background: $main-deep-color-3

.option--icon
  font-size: 2.2rem

.option--text
  font-size: 1.4rem

.option--icon, .option--text
  display: block
  color: $text-color
  transition: color 200ms, transform 200ms
  transform-origin: bottom

.option
  position: relative
  display: flex
  flex-flow: column nowrap
  justify-content: space-around
  align-items: center
  padding: .5em 1em
  height: 50px
  cursor: pointer

  &:hover .option--icon
    transform: scale(1.5)

  &:hover .option--text
    color: $tress-deep-color



</style>
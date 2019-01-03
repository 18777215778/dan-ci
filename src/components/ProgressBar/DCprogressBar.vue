<template>
  <div class="progress-bar-mod">
    <span class="sum">{{ sum }}</span>
    <div class="progress-warp">
      <div class="progress" :style="{width: percentage}">
        <div>
          <p>单词书：{{ bookName }}</p>
          <p>已完成：{{ percentage }}</p>
        </div>
      </div>
    </div>
    <span class="completed">{{ completing }}</span>
  </div>
</template>

<script>
export default {
  name: "DCProgressBar",

  props: {
    completed: {
      type: Number,
      default: 1
    },
    sum: {
      type: Number,
      default: 1
    },
    bookName: {
      type: String,
      default: "先选择一本单词书"
    }
  },

  data: function () {
    return {
      completing: 1
    }
  },

  computed: {
    percentage: function () {
      let percent = (this.completing / this.sum) * 100;
      return `${percent.toFixed(2)}%`
    }
  },

  created: function () {
    this.rollingNumber(this.completed);
  },

  methods: {
    rollingNumber: function (completed) {
      let
        that = this,
        interval = null;

      setInterval(function () {
        if (that.completing < completed) {
          (that.completing += 7) > completed && (that.completing = completed)
        }
        else {
          clearInterval(interval);
        }
      }, 5)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../../assets/sass/main.sass"

.progress-bar-mod
  display: flex
  align-items: center
  width: 100%

.completed, .sum
  width: 3em
  font-size: 1.8rem
  line-height: 1em
  font-weight: bold

.sum
  color: #5E2380

.completed
  color: #FF8A48
  text-align: right

.progress-warp
  flex: 1
  margin: 0 1em
  padding: 5px
  border-radius: 20px
  background-color: $transparent-black

.progress
  position: relative
  width: 1%
  height: 10px
  border-radius: 10px
  background: linear-gradient(270deg, #FF8A48 0, #EC4989 50%, #5E2380 100%)

  div
    visibility: hidden
    position: absolute
    top: -80px
    right: 0
    padding: 0.5em
    border-radius: 10px
    background-color: $transparent-black
    opacity: 0
    transform: translateX(50%)
    transition: opacity 300ms

    p
      margin: 0
      color: #ffffff
      font-size: 1.4rem
      line-height: 1.5em
      white-space: nowrap

    &::after
      content: ""
      position: absolute
      left: 50%
      display: block
      border: 0.5em solid $transparent-black
      border-top-color: transparent
      border-left-color: transparent
      transform: translateX(-50%) rotate(45deg)

  &:hover div
    visibility: visible
    opacity: 1

</style>
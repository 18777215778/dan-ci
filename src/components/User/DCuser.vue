<template>
  <div
    class="user-mod"
    @click="openOrHide"
  >
    <div class="user--header-warp">
      <img :src="userImg" :alt="userName">
    </div>
    <div :class="['user--name','iconfont','icon-jiantou2',{'user--name__active':isActive}]">
      <span>{{ userName }}</span>
      <ul>
        <li class="iconfont icon-shezhi">设置</li>
        <li class="iconfont icon-tuichu">退出登录</li>
        <li class="iconfont icon-shezhi">设置</li>
        <li class="iconfont icon-tuichu">退出登录</li>
        <li class="iconfont icon-shezhi">设置</li>
        <li class="iconfont icon-tuichu">退出登录</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DCUser",
  props: {
    userImg: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    openOrHide: function() {
      this.isActive = !this.isActive;
      // document.addEventListener("click", ev => {
      //   console.log(ev);
      // });
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/main.sass"

.user-mod
  display: flex
  align-items: center
  color: #ffffff
  transform: translateY(-80px)
  animation: user-mod-load cubic-bezier(0,.72,.5,1.47) 500ms forwards

  .user--header-warp
    z-index: 2
    display: flex
    justify-content: center
    align-items: center
    width: 70px
    height: 70px
    border-radius: 70px
    background: linear-background(135deg, $main-light-color-2, $main-deep-color-2)
    box-shadow: 0 3px 6px rgba(0,0,0,.2)

    img
      width: 50px
      height: 50px
      border-radius: inherit

  .user--name
    position: relative
    margin-left: -35px
    padding: 0 3em
    border-radius: 70px
    background: linear-background(90deg, $main-light-color-2, $main-deep-color-2)
    line-height: 2.4em
    box-shadow: 0 3px 6px rgba(0,0,0,.2)
    transform: scaleX(0.1)
    transform-origin: left
    animation: user-mod-load cubic-bezier(0,.72,.5,1.47) 500ms 300ms forwards

    &::before
      position: absolute
      right: 1em
      font-size: 2rem
      transform: rotate(-90deg)

    &:hover::before
      color: $tress-deep-color

    span
      @include ellipsis-show()
      display: block
      width: 10em
      font-weight: bold
      letter-spacing: 1px

    ul
      position: absolute
      z-index: 5
      top: 2.9em
      margin-left: -20px
      padding: 10px 0
      width: 225px
      border-radius: 10px
      background: linear-background(135deg, $main-light-color-2, $main-deep-color-2)
      box-shadow: 0 3px 6px rgba(0,0,0,.2)
      transform: scaleY(0.01)
      opacity: 0
      transition: opacity 200ms, transform 300ms
      transform-origin: top

      &:before
        content: ''
        position: absolute
        top: -1em
        display: block
        width: 100%
        height: 1em

      li
        padding: 0 1em
        border-left: 0 solid $tress-deep-color
        font-size: 1.4rem
        transition: none
        cursor: pointer

        &:hover
          border-left-width: 5px
          color: $tress-deep-color
          transition: border-left-width 200ms

        &::before
          padding-right: 0.5em

    &:hover ul
      transform: scaleY(1)
      opacity: 1

@keyframes user-mod-load
  to
    transform: translateY(0)

@keyframes username-load
  to
    transform: scaleX(1)
</style>

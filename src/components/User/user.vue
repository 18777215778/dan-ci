<template>
  <div
    class="user-mode"
    @click="openOrHide"
  >
    <div class="user">

      <div class="user--header-warp">
        <img :src="userImg" :alt="userName">
      </div>

      <div
        :class="['user--name', 'iconfont', 'icon-icon-arrow-top2', {'user--name__active':isActive}]"
      >
        <span>{{ userName }}</span>
        <ul>
          <li class="iconfont icon-shezhi">设置</li>
          <li class="iconfont icon-bofang">退出登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
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
.user-mode
  font-family: "Segoe UI"
  cursor: pointer

.user
  display: flex
  align-items: center

.user--header-warp, .user--name, .user--name ul
  box-shadow: 0 3px 6px 0 rgba(20,19,34,0.4)

.user--header-warp
  z-index: 1
  box-sizing: border-box
  padding: 10px
  width: 70px
  height: 70px
  border-radius: 70px
  background: linear-gradient(135deg, #38375E 0, #2C294D 100%)

.user--header-warp img
  width: auto
  height: 50px
  border-radius: inherit

.user--name
  display: inline-block
  position: relative
  box-sizing: border-box
  margin-left: -35px
  padding: 0 50px
  min-width: 280px
  border-radius: 70px
  background: linear-gradient(90deg, #38375E 0, #2C294D 100%)
  font-size: 20px

.user--name span
  color: #fff
  line-height: 2em
  font-weight: bold

.user--name:before
  position: absolute
  color: #fff
  top: 50%
  right: 20px
  transform: translateY(-50%) rotate(-90deg)
  transition: transform 200ms, color 200ms

.user--name__active:before
  transform: translateY(-50%) rotate(-180deg)
  color: #ec4989

.user--name ul
  display: none
  position: absolute
  bottom: -230%
  box-sizing: border-box
  width: 230px
  background: linear-gradient(135deg, #38375E 0, #2C294D 100%)
  border-radius: 20px
  overflow: hidden

.user--name ul li
  position: relative
  padding-left: 50px
  font-size: 18px
  line-height: 2.4em
  color: #fff
  transition: background-color 300ms
  cursor: pointer

.user--name ul li:hover
  background-color: #EC4989

.user--name__active ul
  display: block

.user--name ul li:before
  position: absolute
  top: 50%
  left: 17px
  font-size: 20px
  transform: translateY(-50%)
</style>

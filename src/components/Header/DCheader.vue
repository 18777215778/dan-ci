<template>
  <header>
    <DCUser
      :user-img="userImg"
      :user-name="userName"
    />
  </header>
</template>

<script>
import store from "../../store/index";

import DCUser from "../User/DCuser";

export default {
  name: "DCHeader",
  components: {
    DCUser
  },
  data: function() {
    return {
      userImg: store.state.userImg,
      userName: store.state.userName
    };
  },
  created: function() {
    console.log(this.$data);
  }
};
</script>

<style lang="sass" scoped>
header
  display: flex
  align-items: center
  width: 65%
  height: 150px
</style>

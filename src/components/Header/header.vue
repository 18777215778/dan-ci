<template>
  <header>
    <User
      :user-img="userImg"
      :user-name="userName"
    />
  </header>
</template>

<script>
import store from "../../store/index";

import User from "../User/user";

export default {
  name: "Header",
  components: {
    User
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
  margin: 30px auto 0 auto
  max-width: 1180px
</style>

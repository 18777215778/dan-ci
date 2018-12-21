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
  }
};
</script>

<style lang="sass" scoped>
header
  display: flex
  align-items: center
  width: 65%
  min-width: 1000px
  height: 150px
</style>

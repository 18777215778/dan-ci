<template>
  <div
    class="option"
    @click="openURL"
  >
    <slot name="icon" class="_1"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
  export default {
    name: "DCOption",
    props: {
      url: {
        type: String
      }
    },
    methods: {
      openURL: function () {
        this.$emit("openURL", this.url);
      }
    }
  }
</script>

<style scoped>

</style>
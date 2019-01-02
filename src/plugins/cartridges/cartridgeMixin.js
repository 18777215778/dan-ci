export default {
  props: {
    type: {
      type: String
    },
    icon: {
      type: String
    },
    content: {
      required: true
    },
    position: {
      type: Object
    },
    options: {
      type: Object
    }
  },
  methods: {
    // 打开窗口
    openWin: function () {
      this.$vagueShade.shade("#app");
    },
    // 移除弹幕元素
    toDie: function () {
      this.$destroy();
      let el = this.$el;
      el.parentElement.removeChild(el);
    }
  }
}
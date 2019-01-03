import shadeTemplate from "./shadeTemplate";

let shade = {};

shade.install = function (Vue) {

  let data = {
    targetEle: null,
    parentEle: null,
    shadeEle: null
  };

  // 注册 shade 组件
  Vue.component("shade", shadeTemplate);

  function shade(selectors) {
    let targetEle = document.querySelector(selectors);

    if (!targetEle) {
      return undefined;
    }

    targetEle.style.transition = "filter 1000ms";
    targetEle.style.filter = "blur(10px) brightness(70%)";

  }

  function unshade() {

  }

  Vue.prototype.$shade = {
    shade,
    unshade
  }
};

export default shade;
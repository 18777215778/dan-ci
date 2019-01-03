let shadeEle = document.createElement("div");
shadeEle.style.position = "absolute";
shadeEle.style.top = "0";
shadeEle.style.bottom = "0";
shadeEle.style.left = "0";
shadeEle.style.right = "0";
shadeEle.className = "shade";

let shade = {};

shade.install = function(Vue) {
  // 遮罩
  function shade(selectors) {
    let targetEle = document.querySelector(selectors);

    if (!targetEle) {
      return undefined;
    }

    let shadeNode = shadeEle.cloneNode(true);
    let targetParentEle = targetEle.parentElement;
    targetParentEle.insertBefore(shadeNode, targetEle);

    targetEle.style.transition = "filter 1000ms";
    targetEle.style.filter = "blur(10px) brightness(70%)";

    return {
      el: shadeNode,
      unshade: function() {
        targetEle.style.filter = "";
        targetEle.style.transition = "";

        targetParentEle.removeChild(shadeNode);
      }
    };
  }

  Vue.prototype.$shade = {
    shade
  };
};

export default shade;

let vagueShade = {};

vagueShade.install = function (Vue) {

  let data = {
    targetEle: null,
    parentEle: null,
    shadeEle: null
  };

  function shade(selectors) {
    let targetEle = document.querySelector(selectors);

    if (!targetEle) {
      return undefined;
    }

    // targetEle.style.transition = `${targetEle.style.transition}, filter 300ms`;
    // targetEle.style.filter = `${targetEle.style.transform}, blur(10px) brightness(70%)`;

    targetEle.style.transition = "filter 1000ms";
    targetEle.style.filter = "blur(10px) brightness(70%)";

    console.log(targetEle.style.transition);
    console.log(targetEle.style.filter);

    let shadeEle = document.createElement("div");
    shadeEle.style.position = "absolute";
    shadeEle.style.zIndex = "10";
    shadeEle.style.top = "0";
    shadeEle.style.bottom = "0";
    shadeEle.style.left = "0";
    shadeEle.style.right = "0";
    shadeEle.style.backgroundColor = "transparent";

    targetEle.parentElement.appendChild(shadeEle);
  }

  function unshade() {

  }

  Vue.prototype.$vagueShade = {
    shade,
    unshade
  }
};

export default vagueShade;
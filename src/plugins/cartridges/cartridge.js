import DCCartridgeTemplate from "./DCCartridgeTemplate";
import config from "./configurationTable";
import tools from "../../assets/js/tools";

const cartridge = {};
cartridge.install = function (Vue) {

  function send({type, content}) {
    let DCCartridge = Vue.extend(DCCartridgeTemplate);
    let styleAttr = _buildStyle();

    let instance = new DCCartridge({
      propsData: {
        type,
        icon: config[type].icon,
        content,
        styleAttr
      }
    }).$mount();

    document.querySelector('.barrage-area').appendChild(instance.$el);
  }

  function _buildStyle() {

    let yAxis, duration, place;
    yAxis = tools.selectFrom(1, 100);

    if (yAxis <= 50) {
      place = "top";
    }
    else {
      yAxis -= 50;
      place = "bottom"
    }

    duration = 15;

    return {
      [place]: `${yAxis}%`,
      "animation-duration": `${duration}s`
    }
  }

  Vue.prototype.$cartridge = {
    send
  };
};

export default cartridge;
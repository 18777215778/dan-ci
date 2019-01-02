import cartridgeTemplate from "./cartridgeTemplate";
import config from "./configurationTable";
import tools from "../../assets/js/tools";

const cartridge = {};
cartridge.install = function (Vue) {

  // 把弹幕元素插入到DOM中
  function send({type, content, vue}) {
    let DCCartridge = Vue.extend(cartridgeTemplate);
    let position = _randomPosition();

    let instance = new DCCartridge({
      propsData: {
        type,
        icon: config[type].icon,
        content,
        position,
        vue
      }
    });

    document.querySelector('.barrage-area').appendChild(instance.$mount().$el);
  }

  // 随机生成弹幕的位置
  function _randomPosition() {

    let yAxis, duration, place;
    yAxis = tools.selectFrom(1, 100);

    if (yAxis <= 50) {
      place = "top";
    }
    else {
      yAxis -= 50;
      place = "bottom"
    }

    duration = 10;

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
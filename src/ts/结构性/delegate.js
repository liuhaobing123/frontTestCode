const Flower = function () {
  console.log("我是花");
};
// 小明
const xiaoming = {
  sendFlower: function (target) {
    // 拿到花
    const flower = new Flower();
    // 目标对象收花
    target.receiveFlower(flower);
  },
};
// 代理对象
const friend = {
  receiveFlower: function (flower) {
    // 接受小明给的花，并给女神
    nvshen.receiveFlower(flower);
  },
};
// 女神
var nvshen = {
  receiveFlower: function (flower) {
    console.log("我收到了来自小明的花");
  },
};
xiaoming.sendFlower(friend);

export { xiaoming };

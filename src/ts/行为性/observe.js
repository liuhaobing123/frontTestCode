// 售楼处
var saleOffices = {};
// 保存需要买房的登记的用户（订阅者）
saleOffices.clientList = [];
// 根据订阅相同类别的房的订阅者分类保存起来
saleOffices.listens = function (key, fn) {
  if (!this.clientList[key]) {
    this.clientList[key] = [];
  }
  this.clientList[key].push(fn);
};
// 发布消息给订阅者
saleOffices.trigger = function () {
  console.log("5");
  // [].shift.call(arguments) arguments类数组转化为数组
  var key = [].shift.call(arguments);
  let fns = this.clientList[key];
  // 不存在要通知的订阅者
  if (!fns || fns.length === 0) {
    return false;
  }
  for (var i = 0, fn; (fn = fns[i++]); ) {
    fn.apply(this, arguments);
    console.log(fn);
    console.log("8");
  }
};

saleOffices.listens("squareMeter88", function (price) {
  console.log("价格：" + price);
});
saleOffices.listens("1000ping", function (price) {
  console.log("价格：" + price);
});

saleOffices.trigger("squareMeter88", 20000);
saleOffices.trigger("1000ping", 40000);

export { saleOffices };

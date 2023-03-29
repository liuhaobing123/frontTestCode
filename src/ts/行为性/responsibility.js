var obj = {
  a: function () {
    console.log("aaa");
    return this;
  },
  b: function () {
    console.log("bbb");
    return this;
  },
};
// 链式执行
obj.a().b();

export { obj };

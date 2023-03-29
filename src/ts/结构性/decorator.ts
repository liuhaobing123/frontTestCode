//生产手机
class Cellphone {
  create() {
    console.log("生成手机");
  }
}

// 装饰器装饰生产手机的同时生产手机壳
class Decorator {
  cellphone = new Cellphone();
  constructor(cellphone: any) {
    this.cellphone = cellphone;
  }
  create() {
    // 生产手机
    this.cellphone.create();
    // 生产手机壳
    this.createShell();
  }
  createShell() {
    console.log("生成该类型手机的手机壳");
  }
}

const cellphone = new Cellphone();
cellphone.create(); // 只能生产手机

const newPhone = new Decorator(cellphone);
newPhone.create(); // 生产该手机的手机壳

export { cellphone };

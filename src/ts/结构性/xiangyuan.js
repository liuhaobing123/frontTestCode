// 构建享元对象
class Model {
  constructor(id, gender) {
    (this.gender = gender), (this.name = `王${gender}${id}`);
  }
}
// 构建享元工厂
class ModelFactory {
  // 单例模式
  static create(id, gender) {
    if (this[gender]) {
      return this[gender];
    }
    return (this[gender] = new Model(id, gender));
  }
}
// 管理外部状态
class TakeClothesManger {
  // 添加衣服款式
  static addClothes(id, gender, clothes) {
    const model = ModelFactory.create(id, gender);
    this[id] = {
      clothes,
      model,
    };
  }
  // 拍照
  static takePhoto(id) {
    const obj = this[id];
    console.log(`${obj.model}模特${obj.model.name}穿${obj.clothes}拍了张照`);
  }
}
//实例化
for (let i = 0; i < 50; i++) {
  TakeClothesManger.addClothes(i, "男", `衣服${i}`);
  TakeClothesManger.takePhoto(i);
}
for (let i = 0; i < 100; i++) {
  const { addClothes, takePhoto } = TakeClothesManger;
  TakeClothesManger.addClothes(i, "女", `衣服${i}`);
  TakeClothesManger.takePhoto(i);
}

export { TakeClothesManger };

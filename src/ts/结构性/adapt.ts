// 类适配器
// 目标对象
interface Target {
  request(): void;
}
// 被适配者
class Adaptee {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  // 这是源角色，有自己的的业务逻辑
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public specificRequest(): void {}
}
// 适配器
class Adapter extends Adaptee implements Target {
  constructor() {
    super();
  }
  public request(): void {
    super.specificRequest();
    console.log("适配器模式");
  }
}

const target: Target = new Adapter();
target.request();

export { target };

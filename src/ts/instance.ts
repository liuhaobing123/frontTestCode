// 饿汉式
class Singleton1 {
  // 1. 构造器私有化，外部不能new
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  // 2. 本类内部创建对象实例化
  private static instance: Singleton1 = new Singleton1();

  // 3. 提供一个公有的静态方法，返回实例对象
  public static getInstance(): Singleton1 {
    return this.instance;
  }
}

// 懒汉式
class Singleton2 {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  private static instance: Singleton2;

  public static getInstance(): Singleton2 {
    if (!this.instance) {
      this.instance = new Singleton2();
    }

    return this.instance;
  }
}

export { Singleton1, Singleton2 };

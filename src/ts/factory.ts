// 抽象产品接口
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Product {}

// 具体产品一
class ConcreteProduct1 implements Product {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}

// 具体产品二
class ConcreteProduct2 implements Product {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}

// 简单工厂
class SimpleFactory {
  public static createProduct(type: number): Product {
    let product;
    if (type === 1) {
      product = new ConcreteProduct1();
    } else {
      product = new ConcreteProduct2();
    }

    return product;
  }
}

export { SimpleFactory };

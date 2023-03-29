<template>
  <div class="about" @click="aboutClick1">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { defineComponent, onMounted } from "vue";
import { Singleton1, Singleton2 } from "../ts/instance";
import { SimpleFactory } from "../ts/factory";
// 抽象工厂
// import { ConcreteFactory1 } from "../ts/abfactory";
// 原型模式
// import dog from "../ts/prototype";
// 建造者模式
// import product from "../ts/build";
// 装饰器模式
// import { cellphone } from "../ts/结构性/decorator";
// 代理模式
// import { cellphone } from "../ts/结构性/delegate";
// 享元模式
// import { TakeClothesManger } from "../ts/结构性/xiangyuan";
// 适配器模式
// import { target } from "../ts/结构性/adapt";
// 桥接模式
// import { circle } from "../ts/结构性/qiaojie";
// 策略模式
// import { Bonus } from "../ts/行为性/model";
// 观察者模式
// import { saleOffices } from "../ts/行为性/observe";
// 责任链模式
// import { obj } from "../ts/行为性/responsibility";
// 中介者模式
// import { a } from "../ts/行为性/intermediary";

export default defineComponent({
  setup() {
    onMounted(() => {
      // 单例模式
      // console.log(Singleton1.getInstance(), "11111");
      // console.log(Singleton2.getInstance(), "2222");
      // 工厂模式
      // let product = SimpleFactory.createProduct(1);
      // console.log(product);
    });

    return {};
  },
});
</script>

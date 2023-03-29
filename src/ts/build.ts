class Programmer {
  age: number;
  username: string;

  constructor(p: any) {
    this.age = p.age;
    this.username = p.username;
  }

  toString() {
    console.log(this);
  }
}

class Builder {
  age: number | undefined;
  username: string | undefined;

  build() {
    if (this.age && this.username) {
      return new Programmer(this);
    } else {
      throw new Error("缺少信息");
    }
  }

  setAge(age: number) {
    if (age > 18 && age < 36) {
      this.age = age;
      return this;
    } else {
      throw new Error("年龄不合适");
    }
  }

  setUsername(username: string) {
    if (username !== "小明") {
      this.username = username;
      return this;
    } else {
      throw new Error("小明不合适");
    }
  }
}

new Builder().setAge(20).setUsername("小红").build().toString();

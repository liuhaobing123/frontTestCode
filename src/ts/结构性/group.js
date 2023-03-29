// 单个指令
const closeDoorCommand = {
  excute: function () {
    console.log("关门");
  },
  // excute() {
  //  console.log('关门');
  // }
};
const openPcCommand = {
  excute: function () {
    console.log("打开电脑");
  },
};
const openQQCommand = {
  excute: function () {
    console.log("登录QQ");
  },
};
// 调用者
const MacroCommand = function () {
  return {
    commandsList: [],
    // 把每一个指令放进去
    add: function (command) {
      this.commandsList.push(command);
    },
    // 遍历执行
    excute: function () {
      for (var i = 0, command; (command = this.commandsList[i++]); ) {
        command.excute();
      }
    },
  };
};
const macroCommand = MacroCommand();
macroCommand.add(closeDoorCommand);
macroCommand.add(openPcCommand);
macroCommand.add(openQQCommand);
macroCommand.excute();

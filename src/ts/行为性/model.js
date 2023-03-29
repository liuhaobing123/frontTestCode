var strategies = {
  S: function (salary) {
    return salary * 4;
  },
  A: function (salary) {
    return salary * 3;
  },
  B: function (salary) {
    return salary * 2;
  },
};
var Bonus = function (level, salary) {
  return strategies[level](salary);
};
console.log(Bonus("S", 20000));

export { Bonus };

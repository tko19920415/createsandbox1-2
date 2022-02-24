// テンプレート文字列に関して
const name = "tko";
const age = 29;

// 私の名前はtkoです。年齢は29歳です。　を出力

// 今までの方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
console.log(message1);

// テンプレート文字列を用いると
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

// アロー関数

//今までの関数
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数方式

// 書き方 メジャー
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

// 書き方 省略
// const func2 = str => {
//    return str;
// }
// console.log(func2("func2です"));

// 書き方 return 省略
// const func2 = str => str;
// console.log(func2("func2です"));

// アロー関数足し算
const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));

// lesson19

// var val1 = "var変数"
// console.log(val1)


// const val2= "let変数"
// console.log(val2)

// val2 = "let変数を上書き"
// console.log(val2)

// // let val2 = "再宣言"
// console.log(val2)

// const val4 = {
//   name: "jake",
//   age: 28,
// }
// val4.name = "change"
// val4.address = "Tokyo"
// console.log(val4)


// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push("monkey")
// console.log(val5)


// lesson20

/**
 * テンプレート文字列
 */

// const name = "jake";
// const age = 28;

// // 従来の方法
// const message1 = "My name is " + name ;
// console.log(message1)

// // 現在の方法
// const message2 = `My name is ${name}`
// console.log(message2)

/**
 * アロー関数
 */

// 従来の方法
// function func1(str){
//   return str;
// }

const func1 = function(str){
  return str;
}

console.log(func1("func1です。"))
// アロー関数
const func2 = str => {
  return str; // 一行のときは{return}も省略可能。
}
console.log(func2("func2です。"))


const func3 = (num1, num2)=>{
  return num1 + num2;
}
console.log(func3(10,20))

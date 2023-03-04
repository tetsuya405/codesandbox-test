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

// const func1 = function(str){
//   return str;
// }

// console.log(func1("func1です。"))
// // アロー関数
// const func2 = str => {
//   return str; // 一行のときは{return}も省略可能。
// }
// console.log(func2("func2です。"))


// const func3 = (num1, num2)=>{
//   return num1 + num2;
// }
// console.log(func3(10,20))

/**
 * lesson21 分割代入
 */

// const myProfile = {
//   name: "jake",
//   age:28,
  
// };
// const message1 = `My name is ${myProfile.name}. I am ${myProfile.age} years old.`
// console.log(message1)

// const {name, age} = myProfile;
// const message2 = `My name is ${name}. I am ${age} years old.`
// console.log(message2)

// const myProfile = ["jake", 28];
// const message3 = `My name is ${myProfile[0]}. I am ${myProfile[1]} years old.`
// console.log(message3)

// const [name, age ] = myProfile;
// const message4 = `My name is ${name}. I am ${age} years old.`
// console.log(message4)

/**
 * lesson23 デフォルト値
 */

// const sayHello = (name = "guest") => console.log(`Hello, ${name}`);
// sayHello();

/**
 * lesson 24 スプレッド構文
 */
// 配列の展開
// const arr1 = [1,2]
// console.log(arr1)
// console.log(...arr1)// 配列の中身を順番に処理する。

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1)


// // まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1)
// console.log(num2)
// console.log(arr3)

// // 配列のコピー
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4]

// console.log(arr6)
// const arr7 = [...arr4, ...arr5];
// console.log(arr7)


// lesson 25 map filter
const nameArr = ["Tanaka", "Yamada", "Jake"];
// for (let index = 0;index < nameArr.length; index++){
//   console.log(nameArr[index])
// }

// const nameArr2 = nameArr.map((name) =>{
//   return name;
// })
// console.log(nameArr2)

// nameArr.map((name, index)=> console.log(`${index}番目は${name}です。`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=> {
//   if (name === "Jake"){
//     return name
//   }else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr)

/**
 * 三項演算子
 */
// 条件 ? trueのとき  : falseのとき

const val1 = 1 < 0 ? 'true' : "false";
console.log(val1)


const num = "a";
console.log(num.toLocaleString());

const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください。';
console.log(formattedNum)


const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? '100を超えています！！' : '許容範囲内です。';
}
console.log(checkSum(111,-20))




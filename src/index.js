// // /**
// //  *
// //  */
// // // var val1 = "var変数";
// // // console.log(val1)

// // // //var変数は上書き可能
// // // val="var変数は上書き";
// // // console.log(val1);

// // // var val1 = "var変数を再宣言";
// // // console.log(val1);

// // // let val2 = "let変数";
// // // console.log(val2)

// // // // letは上書きが可能
// // // val2 = "let変数上書き";
// // // console.log(val2);

// // // //　letは再宣言不可能
// // // let val2 = "let変数を再宣言";

// // // const val3 = "const変数";
// // // console.log(val3);

// // // //const変数は上書き不可能
// // // //va3 = "const変数を上書き"

// // // const val3 = "const変数を再宣言";

// // //constで定義したオブジェクトはプロパティの変更が可能
// // // const val4 = {
// // //   name: "じゃけぇ",
// // //   age: 28,
// // // };
// // // val4.name = "jak";
// // // val4.addres = "hiroshima";
// // // console.log(val4);

// // const val5 = ["dog", "cat"];
// // val5[0] = "bird";
// // val5.push("monkey");
// // console.log(val5);

// // /**
// //  * テンプレート文字列
// //  * /
// // const name = "じゃけぇ";
// // const age = 28;
// // // 「私の名前はじゃけぇです。年齢は28歳です。」

// // // 従来の方法
// // const message1 = "私の名前は"　+ name + "です。年齢は" + "です。"
// // $

// // /**
// //  *
// //  */
// // //従来の関数
// // // function func1(str) {
// // //   return str;
// // // }
// // // const func1 = function (str) {
// // //   return str;
// // // };
// // // console.log(func1("func1です"));

// // // //アロー関数
// // // const func2 = (str) => {
// // //   return str;
// // // };
// // // console.log(func2("func2です"));

// // // const func3 = (num1, num2) => num1 + num2;

// // // console.log(func3(10, 20));

// // // /**
// // //  * 分割代入
// // //  */

// // // const myprofile = {
// // //   name: "たま",
// // //   age: 28
// // // };

// // // const message1 = `名前は${myprofile.name}です。年齢は${myprofile.age}です`;
// // // console.log(message1);

// // // const { name, age } = myprofile;
// // // const message2 = `名前は${name}です。年齢は${age}です`;
// // // console.log(message2);

// // const myprofile = ['たま', 28];

// // const message3 = `名前は${myprofile[0]}です。年齢は${myprofile[1]}です`;
// // console.log(message3);

// // const [name, age] = myprofile;
// // // const message4 = `名前は${name}です。年齢は${age}です`;
// // // console.log(message4)

// // /**
// //  *デフォルト値　引数など
// //  */

// // const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん!`);
// // sayHello("たま");

// /**
//  * スプレッド構文
//  */

//  // 配列の展開
// const arr1 = [1,2];
// //  console.log(arr1);
// //  console.log(...arr1);

// // const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// // sumFunc(...arr1);

// //まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //はいれつのコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr[0] = 100;
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 *mapやfilter を使った配列の処理
 */
const nameArr = ["田中", "山", "たま"];

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// for (let index = 0; index < nameArr. length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2)

// nameArr.mapmap(name) => console.log((name));

// const numArr = [1, 2, 3, 4, 5]
// const newnumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newnumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "たま") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

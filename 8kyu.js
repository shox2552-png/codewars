// let arr = [1, 2, 3]
// let newArr = arr.map((n)=> n*2 )
//  console.log(newArr);


// let numbers = [1, 5.2, 4, 0, -1]

// function sum (numbers) {
//     if (numbers.length === 0) return 0;

//      let summa = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       summa += numbers[i];
//     }
//     return summa
//   }
// console.log();

// function printArray(array) {
//     return array.join(",")
// }
// console.log(printArray([2, 4, 5, 2]));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  return arr.filter((value , i) => !( i % 2) && value);

// let arr = ([9, 3, "7", "3"], 22)

// function sumMix(arr, sum = 0) {
//     arr.forEach((v) => (sum += Number(v)))
//     return sum
// }
// console.log(sumMix(arr));

// let array = [1, 2, 3, 4, 5]

// function invert(array) {
//     array.map((n)=> 0-n)
// }
// console.log(array);

// let arr = [1, 2, 3, 4]

// let newArr = arr.reduce((a,b) =>  a*b,1 )

// console.log(newArr);


// let arr = [1, 2, 3, 4, 5, 6]

// let newArr = arr.filter((num) => {
//    return  num = num % 2 === 0
// })

// console.log(newArr);



// function sum(numbers) {
//   let total = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }

//   return total;
// }
// console.log();

// let arr = ["Algebra", "History", "Geometry", "English"]

// arr = arr.sort((a, b) => a.toLowerCase() > b.toLowerCase())? 1 : -1
// console.log(arr);

// let str = "Robin Singh"

// let str2 = "I love arrays they are my favorite"

// let s = str.split(" ")
// console.log(s);

// let st = str2.split(" ")
// console.log(st);



// let arr = [1, 2, 2]
// let sum = 0
// let newArr = arr.forEach((value) => sum += value**2)
// console.log(sum);

// let arr = [10]

// let result = []
// for (let i = 1; i <= 10; i++){
//     result.push(i)
// }

// console.log(result);


// function typeOfSum(a,b){
//     return typeof a+b
// }

// function opposite(number) {
//     return -number
// }

// let arr = [1, -4, 7, 12]

// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum += arr[i]
//     }
// }
// console.log(sum);

// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n; i++) {
//         z.push(x * i)
//     }
//     return z;
// }
// console.log(countBy(1,10));
// console.log(countBy(2,5));

// function arr2bin(arr){
//   let sum = 0
//   for(let value of arr){
//     if(typeof value === "number"){
//       if(Number.isNaN(value)){
//         return "NaN"
//       }
//       sum += value
//     }
//   }
//   return sum.toString(2)
// }

// args_count() --> 0
// args_count('a') --> 1
// args_count('a', 'b') --> 2

// function args_count(){
//   return arguments.length
// }


// let sortList = (sortBy, list)=> list.sort((a, b) => b[sortBy] - a[sortBy])

// function consecutive(array) {
//   if(array.length<=1)   return 0;
//     let a = Math.min(...array);
//     let b = Math.max(...array);
//   return( b - a +1)-array.length
// }

// function arithmetic(a, b, operator){
//   if(operator === "add"){return a+b }
//   if(operator === "subtract"){return a-b}
//   if(operator === "multiply"){return a*b}
//   if(operator === "divide"){return a/b}
// }

// var OrderPeople = function(people){
//   return people.sort((a,b)=>a.age-b.age);
// }

// let isSquare = (arr)=> arr.length ? arr.map((n)=>!`${Math.sqrt(n)}`.includes(".")).every((v)=>v) : undefined;


// items = [{a: "b", c: "d"}]


// function sumArray(array) {
//   if(!array || array.length<3) return 0
//   return array.reduce((acc,curr)=>acc + curr,0) - Math.min(...array) - Math.max(...array);
// }
// let sumArray = (array)=> !array || array.length < 3 ? 0 : array.reduce((acc , curr)=> acc + curr , 0) - Math.min(...array) - Math.max(...array)

// function stringy(size, a='') {
//    for (let i = 0; i < size; i++) {  a += i % 2 === 0 ? '1' : '0';} return a}
// let stringy = (size)=> Array(size).fill(0).map((v,i)=>(i+1)%2?1:0).join("");
// let gooseFilter = (arr)=> arr = arr.filter((v)=> !["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"].includes(v))

// function smash (words) {
//    return words.join(" ");
// };

// function arrayPlusArray(arr1, arr2) {
//   return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
// }

// Array.prototype.first = function() { return this[0] }
// Array.prototype.last  = function() { return this[this.length - 1] }

// function duckDuckGoose(players, goose) {
//   return players[(goose - 1) % players.length].name;
// }

// function unusualFive() {
//   return "abcde".length;
// }

// function doubleInteger(i) {
//   return i*2;
// }

// let add = (n1, n2, max = 0, str = "") => {
//   n1 > n2 ? (max = n1) : (max = n2);
//   let arr1 = `${n1}`.split("");
//   let arr2 = `${n2}`.split("");
//   for (let i = 1; i <= `${max}`.length; i++)
//     str = (+arr1.at(-i) || 0) + (+arr2.at(-i) || 0) + str;
//   return +str;
// };

// function type(v) {
//   if (Array.isArray(v)) return "array";
//   if (v instanceof Date) return "date";
//   return typeof v;
// }

// function findMissingNumbers(arr) {
// let com = []
// for(let i = arr [0]; i <= arr [arr.length -1]; i++ ){
//   if(!arr.includes(i)){
//     com.push(i)
//   }
// }
//   return com
// }

// function findLongest(array) {
//   return array.reduce((acc, cur) =>
//     String(acc).length >= String(cur).length ? acc : cur
//   );
// }

// let  getCount = str => str.split('').filter(c => 'aeiou'.includes(c)).length;

// function wordsToSentence(words) {
//   return words.join(" ");
// }

// let powerOf4 = n => Number.isInteger(n) && n > 0 && Number.isInteger(Math.log(n)/Math.log(4))

// function createPhoneNumber(numbers) {
//   return `(${numbers[0]}${numbers[1]}${numbers[2]}) ` +
//          `${numbers[3]}${numbers[4]}${numbers[5]}-` +
//          `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
// }

// let solve = (a,b) => b.map(x => a.filter(n => n === x).length);

// function solution(nums){
//   if (!nums) return [];           
//   return nums.sort((a, b) => a - b); 
// }


// const titleToNumber = title => title.split("").map(a => a.charCodeAt() - 64).reduce((a, b) => a * 26 + b);

// f=lambda s,v:any(x==v or isinstance(x,list) and f(x,v) for x in s)

// let incrementer = (nums) =>  nums.map((num, i) => (num + i + 1) % 10); 

// function add(n) {
//   return function (x) {
//     return x + n;
//   };
// }

// let digitalRoot = (n) => n === 0 ? 0 : 1 + (n - 1) % 9;

// let  maxProduct = arr => {
//   let a = 0, b = 0;
//   for (const x of arr)
//     x > a ? ([b, a] = [a, x]) : x > b && (b = x);
//   return a * b;
// };
// let stray = (n) => n.reduce((a,b) => a^b)

// let maxDiff=(list)=>  list.length ? Math.max(...list) - Math.min(...list) : 0;

// class Animal {
//     constructor(name, type) {
//         this.name = name
//         this.type = type
//     }
//     toString(){
//       return `${this.name} is a ${this.type}`;
//     }
// }


// function makeClass(...arr) {
//   return class {
//     constructor(...a) {
//       for (let i = 0; i < arr.length; i++) {
//         this[arr[i]] = a[i];
//       }
//     }
//   };
// }

// let arr = [1, 2, 3]
// let newArr = arr.map((n)=> n*2 )
//  console.log(newArr);
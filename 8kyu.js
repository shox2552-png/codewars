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
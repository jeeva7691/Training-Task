"use strict";
// // // let a=1
// // let a= "abc";
// // console.log(a);
// class frst
// {
//     i=12;
//     b=1;   
//     IncrementI()
//     {
//         this.i=i;
//         this.b=b;
//     }
//     Incr()
//     {
//         return this.i++;
//     }
// }
// let ob = new frst()
// console.log(ob.i,ob.b);
// console.log(ob.Incr);
// let a : number = 5;
// var any1; //type could be any type
// var num1 : number; //Type Annotation
// var num2 : number = 2; //type annotation and initialize
// var num3 = 3; //type  inference
// var num4 = num3 + 100; //type inference(number)
// var str1 = num1 + 'some string'; //type inference (string)
// var nothappy : number = num1 + 'some string'; //Error
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(str1);
// console.log(nothappy);
//  let a : number = 1;
//  var num1 : number = 2;
//  let b : string = "abc";
//  let c : boolean = "true";
//  let d : undefined;
//  let e : null;
//union Types
//  let a : number | string ;
//  a = 1
//  console.log(a);
//  a = 'jeeva';
//  console.log(a);
// Array Declaration union types
//  let a : (number | string | boolean) []; 
//  a = ['jeeva',19,'akshay',22,true,false];
//  console.log(a);
//  Multiple Array of objects
//  let a  : {     //Array of objects in Type script
//     name : string;
//     age :  number;
//  }[]  = [{
//     name : "jeeva",
//     age  : 19
//     },
// {
//     name : "akshay",
//     age : 19
// },
// {
//     name : "Arbaz",
//     age : 18
// },
// {
//     name : "divakar",
//     age : 19
// },
// {
//     name : "ayyanar",
//     age : 22
// },
// {
//     name : "Srikanth",
//     age : 25
// },
// {
//     name : "Arun",
//     age : 20
// },
// ]
// //  a.forEach(e => e.age > 18 ? console.log(e.name) : console.log(0)) 
//  var x = a.map(e => {
//     const z = [];
//     if(e.age <= 20)
//     {
//         z.push(e.name);
//     }
//     return z;
// })
// console.log(x);
//console.log(a);
//  let a1  = [
// {
//     name1 :'jeeva',
//     age1 : 19
// },
// {                    Normal Array of objects declaration
//     name1 :'sam',
//     age1 : 25
// }
// ]
// console.log(a1);
//Sum Function
// let num : number = 11;
// let numm : number = 8;
// sum(num,numm)
// function sum (num1 : number , num2 : number) : number {  Normal Function
//     return num1 + num2;
// }
// console.log(sum(num,numm));
//Optional argument  Function
// let num1 : number = 11;
// let num2 : number = 13;
// function sum1(num1 : number, num2:number,num3?:number) : number
// {
//     if(num3!=undefined){
//         return num1 + num2 + num3;
//     }
//     else
//     {
//         return num1+num2;
//     }   
// }
// console.log(sum1(num1,num2));
//Default argument Function
// let num1 : number = 11;
// let num2 : number = 13;
// function sum1(num1 : number, num2:number=23) : number
// {
//     return num1+num2;
// }
// console.log(sum1(num1));
//Default argument function for first parameter
// let num1 : number = 11;
// let num2 : number = 13;
// function sum1(num1 =13, num2:number) : number not working
// {
//     return num1+num2;
// }
// console.log(sum1(num2));
//Dynamic argument function
// let num1 : number = 122;
// function sum1(num1 : number,...num2:number[]) : number[]
// {
//         let sum=num2.map( e => e+num1)
//         return sum;    
// }
// console.log(sum1(num1,2,3,4,5));
//Annonymous Function
// let num1 : number = 122;
// console.log(function sum1(num1 : number,num2:number) : number
// {
//         let sum=num1 + num2;
//         return sum;    
// } (9,10));
//Arrow Function
// let num1 : number = 122;
// let num2 : number = 12;
// let num3 = (num1:number,num2:number): number  => {
//     return num1 + num2;
// }
// console.log(num3(num1,num2));
// Tuple Creation
let a = [1, 'jeeva'];
console.log(a);

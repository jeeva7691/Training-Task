// a = [
//     {
//         'name':'Raddish',
//         'category':'vegetable',
//     },
//     {
//         'name':'Carrot',
//         'category':'vegetable',
//     },
//     {
//         'name':'Sweet potato',
//         'category':'Vegetable',
//     },
//     {
//         'name':'Dragon Fruit',
//         'category':'Fruit',
//     },
//     {
//         'name':'Apple',
//         'category':'Fruit',
//     },
//     {
//         'name':'Cheetah',
//         'category':'Animal',
//     },
// ]
// cap = a.map(e => {
//     x={ };
//     x[e.category] = e.name;
//     return x;
// }).filter(e => x.category != e.category)
// console.log(cap)
// a = [1,2,3,4,5,6]
// sum=0
// count=0
// x = a.forEach(e => {
//  if(e % 2==0)
//  {
//     sum+=e;
//     count++;
//  } 
// });
// console.log(sum/count)


arr =[2,6,12,16,90,91]

//1. function print(e)
// {
//     console.log(e);  Normal Function
// }
// arr.forEach(print)

//2. arr.forEach(function(e) {
   
//    console.log(e);      Anonymous Function
   
// });

//3. arr.forEach(e => { console.log(e)});      Arrow Function

//4. print = function(e)
// {
//    console.log(e);       Anonymous Function as a variable
// }
// arr.forEach(print)

                              // MAP Function

// 1. function square(e)
// {
//     return e*2; //Normal Function with Map
// }
// newarray = arr.map(square)
// console.log(newarray);

//2. newa = arr.map(e => {return e*2})//  Arrow function with Map
// console.log(newa)

//3. newarray = arr.map(function(e)
// {
//    return e*2; Annonymous function as a variable with a MAP function
// });
// console.log(newarray);

//4. mymap = function(e)
// {
//    return e*2;       Annonymous function assinged to variable with a MAP function
// }
//  newa = arr.map(mymap)
//  console.log(newa);


               // Filter Functions ???

// fil = arr.filter(e => e % 2 ==0)
// console.log(fil)

//  new1 = arr.map(e => 
//      {
//          if(e % 2 == 0)
//              return e;
//      })
//console.log(new1);

// function isEven(e)
// {
//     if(e % 2 == 0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// new1 = arr.filter(isEven)
// console.log(new1)

//Reduce function

//  red = arr.reduce((acc,val) => {
//     console.log("acc",acc);
//     console.log("val",val);      
//    return acc + val;
// });
// console.log("sum",red);

// function sum(e1,e2)
// {
//     return e1+e2;        NORMAL FUNCTION
// }
// m1 = arr.reduce(sum);
// console.log(m1);

// m1 = arr.reduce((acc,val) => acc + val)  ARROW FUNCTION
// console.log(m1);

// total = function(e,e1)
// {
//     return e + e1;   Anonymous Function assigned to variable
// }
// m1 = arr.reduce(total)
// console.log(m1);

a = [{
    'uid' : 1,
    'name' : "Divakar",
    'age' : 25,
    'gender' : 'm',
    'salary' : 25000
    },
    {
    'uid' : 18,
    'name' : "Darshini",
    'age' : 20,
    'gender' : 'f',
    'salary' : 20000
    },
    {
    'uid' : 234,
    'name' : "jeeva",
    'age' : 19,
    'gender' : 'm',
    'salary' : 15000
    },
    {
    'uid' : 342,
    'name' : "sandhiya",
    'age' : 21,
    'gender' : 'f',
    'salary' : 25000
    }
]
arr = {};
arr.a=[{gender,salary}];
console.log(arr);
//user = {'id':1,'name':"jeeva",'age':19,'gender':'m','sal':15000};
// function myfun({sal})
// {
//     console.log(sal);
// }
//myfun(a); //sum of salary 

// maxofsal = a.reduce((a,maxofsal = a.reduce((a,b) => a+b.salary,0)
// console.log(maxofsal);b) => a+b.salary,0)
// console.log(maxofsal);

function mydestructing({gender,salary})
{
    // console.log("Gender",gender);
    // console.log("Salary",salary);
}
mydestructing(a);
// maxofsal = a.reduce({gender,salary},e,b => e.gender == 'm' ? x + b.salary : 0,0)
// console.log(maxofsal);






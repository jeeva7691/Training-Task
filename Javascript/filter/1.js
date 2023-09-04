//1. Write a function that takes an array of numbers and returns a new array with only the even numbers. Use the filter method to accomplish this.
a = [1,2,3,4,5,100,101,106,121]
x = a.filter(e => e % 2 == 0)
console.log(x)
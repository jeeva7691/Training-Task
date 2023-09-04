// 4. Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.

arr = [1,2,3,4,56]
arr1 = [5,6,7,8,9]
b=[]
arr.forEach((element,i) => b.push(element + arr1[i]))
console.log(b)
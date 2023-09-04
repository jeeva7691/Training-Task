// 1.Get the sum of two arrays…actually the sum of all their elements.P.S. Each array includes only integer numbers. Output is a number too.

arr = [1,2,3,4,56]
arr1 = [5,6,7,8,9]
sum=0
arr.forEach(element => sum += element)
arr1.forEach(e => sum += e)
console.log(sum)
//3. Write a function that takes an array of strings and returns a new array with only the strings that have a length greater than a given amount. Use the filter method to accomplish this.

a = ['jeeva','school','garden','nature','mountain']
len = 6;
x = a.filter((e) => e.length > len)
console.log(x)
//1. Write a function that takes an array of numbers and returns a new array with only the even numbers. Use the filter method to accomplish this.
a = [1,2,3,4,5,100,101,106,121]
x = a.filter(e => e % 2 == 0)
console.log(x)

//2. Write a function that takes an array of objects with a price property and returns a new array with only the objects that have a price less than a given amount. Use the filter method to accomplish this.
a = [
    {
        'name':'Samsung',
        'price':19000,
    },
    {
        'name':'Vivo',
        'price':15000,
    },
    {
        'name':'Nokia 118',
        'price':5000,
    },
    {
        'name':'jio-phone',
        'price':1500,
    },
]
x = 5000;
z = a.filter(e => e.price <= x)
console.log(z);

//3. Write a function that takes an array of strings and returns a new array with only the strings that have a length greater than a given amount. Use the filter method to accomplish this.

a = ['jeeva','school','garden','nature','mountain']
len = 6;
x = a.filter((e) => e.length > len)
console.log(x)

//4.Write a function that takes an array of objects with a category property and returns a new array with only the unique categories. Use the filter and map methods to accomplish this.


















//5.Write a function that takes an array of objects with a name and age property and returns a new array with only the objects where the age is greater than a given amount. Use the filter method to accomplish this.

a = [
    {
        'name':'jeeva',
        'age':19
    },
    {
        'name':'Arun',
        'age':31
    },
    {
        'name':'Arbaz',
        'age':20
    },
    {
        'name':'Akshay',
        'age':18
    }
]
age = 18;
x = a.filter(e => e.age > age)
console.log(x)
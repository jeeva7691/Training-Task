
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
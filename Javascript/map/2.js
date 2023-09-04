//2. Write a function that takes an array of objects with a name property and returns a new array of strings with the name of each object capitalized. Use the Map object to accomplish this.
a = [
    {
        'name':'jeeva',
        'age':19,
    },
    {
        'name':'Arun',
        'age':31,
    },
    {
        'name':'Arbaz',
        'age':20
    },
    {
        'name':'Akshay',
        'age':18,
    },
]
cap = a.map(e => {
    a={ };
    a.name = e.name.toUpperCase();
    return a;
})
console.log(cap);

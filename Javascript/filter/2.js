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
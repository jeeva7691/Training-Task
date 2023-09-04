//4. Write a function that takes an array of objects with a category property and returns a new array with only the unique categories. Use the filter and map methods to accomplish this.

a = [
    {
        'name':'Raddish',
        'category':'vegetable',
    },
    {
        'name':'Carrot',
        'category':'vegetable',
    },
    {
        'name':'Sweet potato',
        'category':'Vegetable',
    },
    {
        'name':'Dragon Fruit',
        'category':'Fruit',
    },
    {
        'name':'Apple',
        'category':'Fruit',
    },
    {
        'name':'Cheetah',
        'category':'Animal',
    },
]

uniquecat = a.map(e => 
    {
    x = [];
    x['category'] = e.category;
    return x;
    })
console.log(uniquecat); //not completed
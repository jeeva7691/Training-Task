// 5. Write a function that takes an array of objects with a category property and returns an object where the keys are the categories, and the values are arrays of objects with that category. Use 
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
cap = a.map(e => {
    x={ };
    x[e.category] = e.name;
    return x;
})
console.log(cap) ///Still have to complete

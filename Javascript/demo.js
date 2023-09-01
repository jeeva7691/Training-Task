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
}).filter(e => x.category != e.category)
console.log(cap)

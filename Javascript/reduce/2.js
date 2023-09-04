//2. Write a function that takes an array of objects with a price property and returns the total cost of all the objects. Use the reduce method to accomplish this.
let tcost;
({cost} = [
    {
        'product':'Android',
        'cost':19000,
    },
    {
        'Product':'Washing-Machine',
        'cost':31000,
    },
    {
        'product':'Refrigerator',
        'cost':35000
    },
    {
        'product':'Smart-Tv',
        'cost':18000,
    }
]);
console.log(tcost);
console.log(cost,product);
a.reduce(e =>
    e.cost + e.cost); // 
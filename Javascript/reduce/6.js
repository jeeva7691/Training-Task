//6. Write a function that takes an array of objects with a name and age property and returns the average age of all the objects. Use the reduce method to accomplish this.

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
        'age':20,
    },
]
newa = a.reduce((e,i,{age}) => 
{
    console.log(e.age,i.age); //Incomplete
});
//console.log(newa);


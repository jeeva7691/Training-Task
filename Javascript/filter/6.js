//6.Write a function that takes an array of objects with a name and hobbies property and returns a new array with only the objects where the hobbies include a given hobby. Use the filter method to accomplish this.

a = [
    {
        'name':'jeeva',
        'age':19,
        'hobbies' : 'playing'
    },
    {
        'name':'Arun',
        'age':31,
        'hobbies':'Travelling',
    },
    {
        'name':'Arbaz',
        'age':20,
        'hobbies' : 'Listen to music',
    },
    {
        'name':'Akshay',
        'age':18,
        'hobbies':'Eating',
    }
]
hobbi = 'playing'
newarray = a.filter(e => e.hobbies == hobbi)
console.log(newarray);

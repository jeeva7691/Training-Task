//7.  Write a function that takes an array of objects with a name and grades property and returns a new array with only the objects where the average grade is greater than a given amount. Use the filter method to accomplish this.


a = [
    {
        'name':'jeeva',
        'grade': 'A'
    },
    {
        'name':'Arun',
        'grade':'A'
    },
    {
        'name':'Arbaz',
        'grade':'A+'
    },
    {
        'name':'Akshay',
        'grade':'A+'
    }
]
average = 'A+'
 array = a.filter(e => e.grade == 'A+')
 console.log(array)
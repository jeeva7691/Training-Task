//1. Write a function that takes an array of numbers and returns a new array with each number squared. Use the Map object to accomplish this.
a = [2,4,6,8,1,9]
b = []
b = a.map(e => e * e)
console.log(b);


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


// 3.Write a function that takes an array of words and returns an object where the keys are the words and the values are the number of times each word appears in the array. Use the Map object to accomplish this.

a = ['name','age','salary','age']
x = a.map((e,count)=> {
    i=0;
    y={  }
    function fun1(e)
    {
        count = 0;
        for(i=0;i<a.length;i++)
        {
            if(e == a[i])
            {
                count++;
            }
        }
        return count;
    }
    z=fun1(e)
    y[e]=z;
    i++;
    return y;
})
console.log(x)

// 4. Write a function that takes a string and returns an object where the keys are the characters in the string and the values are the number of times each character appears in the string. Use the Map object to accomplish this.

a = "Madam"
b = a.toLowerCase()
s = b.split("");
x = s.map((e,count)=> {
    y={  }
    function fun1(e)
    {
        count = 0;
        for(i=0;i<s.length;i++)
        {
            if(e == s[i])
            {
                count++;
            }
        }
        return count;
    }
    z=fun1(e)
    y[e]=z;
    return y;
})
console.log(x)



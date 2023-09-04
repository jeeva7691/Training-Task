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

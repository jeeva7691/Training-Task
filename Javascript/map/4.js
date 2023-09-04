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
console.log(x);

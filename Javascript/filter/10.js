//10. Write a function that takes an array of strings and returns a new array with only the strings that are palindromes. Use the filter method to accomplish this.

a = ['madam','mam','dad','jeeva','school']
a.filter(e => 
{
    count = 0;
    len = e.length-1;
    for(i=0;i<e.length/2;i++)
    {
        if(e[i] != e[len])
        {
            count++;
            break;
        }
        len--;
    }
    if(count == 0)
        console.log(e);
});

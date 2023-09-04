// 9. write a program that will check if two strings are palindromes.

a = ['madam']
a.forEach(e => 
{
    count = 0;
    len = e.length-1;
    for(i=0;i<e.length/2;i++)
    {
        if(e[i] != e[len])
        {
            count++;
            console.log("Not palindrome");
            break;
        }
        len--;
    }
    if(count == 0)
        console.log("Palindrome");
});
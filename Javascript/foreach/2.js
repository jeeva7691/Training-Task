// 2.Using a for loop print all even numbers up to  and including n. Don’t include 0.

b = 50;
c = [];
for(i=1;i<=b;i++)
{
    if(i % 2 == 0)
    {
        c.push(i);
    }
}
console.log(c)
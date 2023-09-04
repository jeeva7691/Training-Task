//7. Given a number n Calculate the factorial of the number

n = [2,5,25]
n.forEach(element => {
    fact=1;
    for(i=1;i<=element;i++)
    {
        fact = fact*i;
    }
    console.log(fact);
});
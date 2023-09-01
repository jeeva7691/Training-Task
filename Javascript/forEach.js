// 1.Get the sum of two arrays…actually the sum of all their elements.P.S. Each array includes only integer numbers. Output is a number too.

arr = [1,2,3,4,56]
arr1 = [5,6,7,8,9]
sum=0
arr.forEach(element => sum += element)
arr1.forEach(e => sum += e)
console.log(sum)

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


// 3. Using a for loop output the elements in reverse order

a = [2,3,4,5,6]
for(i=a.length-1;i>=0;i--)
{
    console.log(a[i]);
}

// 4. Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.

arr = [1,2,3,4,56]
arr1 = [5,6,7,8,9]
b=[]
arr.forEach((element,i) => b.push(element + arr1[i]))
console.log(b)

//5.Given a string change the every second letter to an uppercase ‘Z’. Assume there are no space.

a = ["jeeva","arun"]
b=[]
 a.forEach((e) => {
    let c=[]
    for(i=0;i<e.length;i++)
    {
        if(i==1)
            c +=String.fromCharCode(e.charCodeAt(1)-32);
        else
            c += e[i];
    }
    b.push(c);
 })
 console.log(b);

 //6. Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

 a = ["jeevay","arun"]
 a.forEach((e) => {
    x=0;
    for(i=0;i<e.length;i++)
    {
        if(e[i] == 'y')
        {
            console.log('yes');
            x++;
            break;
        }
    }
    if(x==0)
        console.log('no');
 })


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

//10. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

num = 10
sum = 0;
    for(i=1;i<=num;i++)
    {
        sum += i;
    } 
console.log("the sum of series is"+" "+sum)




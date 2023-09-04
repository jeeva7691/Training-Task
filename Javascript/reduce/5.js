//5. Write a function that takes an array of strings and returns an object where the keys are the strings, and the values are the number of times each string appears in the array. Use the reduce method to accomplish this.

arr =['Apple','Aerospace','aeroplane','Badminton','Aerospace']
// newar = arr.reduce((acc,val) => {

// });
found = 0;
for(i=0;i<arr.length;i++)
{
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[i] == arr[j])
        {
            found = 1;
        }
        else
        {
            found = 0;
        }
    }
    if(found == 0)
    {
        console.log(arr[i]);
    }
}
//console.log(temp);
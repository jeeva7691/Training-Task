//5. Write a function that takes an array of strings and returns an object where the keys are the strings, and the values are the number of times each string appears in the array. Use the reduce method to accomplish this.

arr =['Apple','Aerospace','aeroplane','Badminton','Aerospace']
mapa = arr.map(e => 
    {
        x = []
        x[e] = e;
        return x;
        count = 0;
    }).reduce((e,i)=> e == arr[i] ? "Present" : "Not Present");
console.log(mapa);
// newar = arr.reduce((e,i,a) => {
//     x =[]
//     if(e === a[i])
//     {
//         x.push(e);
//     }
//     else
//     {
//         x.push(i);
//     }
//     z = {object} = arr;
//     console.log(z);

// });
//console.log(newar);
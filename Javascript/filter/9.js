// 9. Write a function that takes an array of objects with a name and email property and returns a new array with only the objects where the email address includes a given domain. Use the filter method to accomplish this.

arr = [
    {'name' : 'jeeva','email':'jeevad807@gmail.com'},
    {'name' : 'arun','email':'arun@yahoo.com'},
    {'name' : 'arun babu','email':'arunbabu@gmail.com'},
    {'name' : 'srikanth','email':'srikanth@gmail.in'}
];
emai = '@yahoo.com';
newarr = arr.filter(e => {
    return e.email.slice(e.email.indexOf('@')) == emai
}
);
console.log(newarr); // not completed Doubt ??
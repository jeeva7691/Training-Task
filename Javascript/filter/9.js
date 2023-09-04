// 9. Write a function that takes an array of objects with a name and email property and returns a new array with only the objects where the email address includes a given domain. Use the filter method to accomplish this.

arr = [
    {'name' : 'jeeva','email':'jeevad807@gmail.com'},
    {'name' : 'arun','email':'arun@yahoo.com'},
    {'name' : 'arun babu','email':'arunbabu@gmail.com'},
    {'name' : 'srikanth','email':'srikanth@yahoo.in'}
];
emai = '@gmail.com';
newarr = arr.filter(e => {
    return e.email == e.email.emai}
);
console.log(newarr);
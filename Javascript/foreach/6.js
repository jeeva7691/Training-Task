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


//5.Given a string change the every second letter to an uppercase ‘Z’. Assume there are no space.

a = ["jeeva","arun"]
b=[]
 a.forEach((e) => {
    let c=[]
    for(i=0;i<e.length;i++)
    {
        if(i % 2 == 0)
            c +=String.fromCharCode(e.charCodeAt(1)-32);
        else
            c += e[i];
    }
    b.push(c);
 })
 console.log(b);
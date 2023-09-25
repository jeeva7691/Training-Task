// alert("Hello_world")
function fun1(thisdate)
{
    function currentTime() {
        let date = new Date(); 
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        let session = "AM";
      
        // if(hh == 0){
        //     hh = 12;
        // }
        // if(hh > 12){
        //     hh = hh - 12;
        //     session = "PM";
        //  }
      
        //  hh = (hh < 10) ? "0" + hh : hh;
        //  mm = (mm < 10) ? "0" + mm : mm;
        //  ss = (ss < 10) ? "0" + ss : ss;
          
         let time = hh + ":" + mm + ":" + ss + " " + session;
      
        document.getElementById("btn").onclick = time; 
        let t = setTimeout(function(){ currentTime() }, 1000);
      }
      currentTime();
}

// document.getElementById("btn").onClick = 
// function()
// {
//     alert("Hi Iam you !")
// };

// window.onload = function()
// {
//     document.getElementById("btn").onclick = 
//     function() {
//         alert("Hello_World Iam you!")
//     };
// };

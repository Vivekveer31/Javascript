function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let session = "AM"
   
    
    if(h>=12){
        session ="PM";
    }
 
         if(h>12){
           h = h-12;
        
  }

      s=s<10? "0"+s : s;
      h=h<10? "0"+h : h;
      m=m<10? "0"+m : m;
    let tim = h +":" + m + ":" + s + " "+session;
    document.getElementsByClassName('time')[0].innerHTML=tim;


    setTimeout(showTime,1000)
}
 var bulb = document.querySelector('.gola');
 var button = document.querySelector('.butt');


 var flag = true;
 button.addEventListener("click",function(){
    if(flag ){
        bulb.style.backgroundColor="yellow";
        flag= false;
        button.innerHTML ="OFF";
    }
    else{
        bulb.style.backgroundColor="transparent";
        button.innerHTML ="ON";
       
    }

 })

let flag = false;
const name = document.getElementById('name');
const email = document.getElementById('email');
const error =  document.getElementById('name-error');
const erroremail =  document.getElementById('email-error');
const password = document.getElementById('password')
const errorpassword = document.getElementById('password-error')

function formFormat(){
    if(name.value==""){
        error.innerHTML = '* you have not enterded your name'
        flag=false
    } else {
        error .innerHTML = ``
        
        flag=true
    }
    
    if(email.value==""){
        erroremail.innerHTML ='* email is not entered'
        flag=false
    }else{
        erroremail.innerHTML =""
        erroremail.style.color='green'
        flag=false
    }     
    
    if(password.value==""){
        errorpassword.innerHTML =" *you have not entered password 👺"
        flag=false
    }else if(password.value.length<'8'){
        errorpassword.innerHTML="password length must be up t0 8 character"
        flag=false
    }else{
        errorpassword.innerHTML=""
        flag=true
    }
    
   
   if(flag==true){
  
    return true;
   
   }else{
    return false
   }
        

}
 
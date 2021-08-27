    
   function function1(){
    var a = document.getElementById("mobile").value;
    var b = document.getElementById("pass").value;
    
    var mobile = localStorage.getItem("mobile1");
    var pass1 = localStorage.getItem("password1");

    if(a == mobile && b == pass1){
        window.location.href = "payment6.html.html";
        alert("login Succesfully");
    }
    else{
        alert("MOBILE OR PASSWORD WRONG");
        window.location.href = "login.html";
    }
}

        

    
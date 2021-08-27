function submit(){
    var mobile = document.getElementById("mobile").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    
    var l = mobile.length;
    console.log(l);


    localStorage.setItem("name1",name)
    localStorage.setItem("mobile1",mobile)
    localStorage.setItem("password1",password)

    if(mobile =="" || password =="" || name =="" || l==9){
        alert("Fill the Form");
    }
    else{
        alert("SUCCESFULLY Sign In")
        window.location.href = "login.html";
    }

    
}
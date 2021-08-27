   

    function decrese(){
        var inc = document.getElementById("price").textContent;
        var cnumber = Number(inc);
        var realprice = cnumber-599;
        document.getElementById("price").textContent = realprice;
        document.getElementById("totalprice").textContent = realprice;
        document.getElementById("totalpriceadd").textContent = realprice+129;

        var a= document.getElementById("display").textContent;
        var b = Number(a);
        var i = 1;
        var c = b-1;
        
        document.getElementById("display").textContent = c;
    }

    function function1(){
        var inc = document.getElementById("price").textContent;
        var cnumber = Number(inc);
        var realprice = cnumber+599;
        document.getElementById("price").textContent = realprice;
        document.getElementById("totalprice").textContent = realprice;
        document.getElementById("totalpriceadd").textContent = realprice+129;

        var a= document.getElementById("display").textContent;
        var b = Number(a);
        var i = 1;
        var c = b+1;
        
        document.getElementById("display").textContent = c;
    }

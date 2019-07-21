var socket = io.connect('http://localhost:8080', {'force new connection': true});

function myLoginFunction() {
    var un = document.forms["loginDatabase"]["usernameLogin"].value;
    var pwd = document.forms["loginDatabase"]["passwordLogin"].value;
    if (un == "") {
        document.getElementById("usernameError").innerHTML = "*username field cannot be empty*";
    }
    if (pwd == "") {
        document.getElementById("passwordError").innerHTML = "*password field cannot be empty*";
    }
    if(!(un == "" && pwd == "")){
        socket.emit('DBQueryLogin', {un: un, pwd: pwd});
    }
}

function myRegisterFunction(){
    var uname = document.forms["registerDatabase"]["usernameRegister"].value;
    var upwd = document.forms["registerDatabase"]["passwordRegister"].value;
    var upwdre = document.forms["registerDatabase"]["repasswordRegister"].value;
    var email = document.forms["registerDatabase"]["emailRegister"].value;

    if(!(uname == "" && upwd == "" && email == "" && upwdre == "")){
        if(!(upwd == upwdre)){
            alert("your password doesn't match!!");
        }else {
            socket.emit('DBQueryRegister', {un: uname, pwd: upwd, email: email});
        }
    }else{
        alert("one of the registration fields is blank!!");
    }

}
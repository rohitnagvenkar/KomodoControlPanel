var username = "Guest";

socket.emit('username_guest', username);

socket.emit('Welcome', "Connected?");

// submit text message without reload/refresh the page
$('form').submit(function(e){
	e.preventDefault(); // prevents page reloading
	socket.emit('chat_message', $('#txt').val());
	$('#txt').val('');
	return false;
});
// append the chat text message
socket.on('chat_message', function(msg){
	$('#messages').append($('<li>').html(msg));
});



// append the chat text message
socket.on('Welcome', function(msg){
	document.getElementById("message").innerHTML += msg;
});

// append text if someone is online
socket.on('is_online', function(username) {
	$('#messages').append($('<li>').html(username));
});

socket.on('DBQueryLogin', function(un,pwd){
    if(msg == "True"){
        document.getElementById("message").innerHTML += "username already exists";
    }else{
        document.getElementById("message").innerHTML += "username doesn't exists";
    }
});

socket.on('DBQueryLoginReply', function(msg){
    if(msg.check == "True"){
        document.getElementById("message").innerHTML += "\nwelcome back " + msg.un;
        document.forms["loginDatabase"]["usernameLogin"].value = "";
        document.forms["loginDatabase"]["passwordLogin"].value = "";
        document.getElementById("defaultOpen").disabled = true;
        document.getElementById("KomodoTAB").click();
        username = msg.un;
        socket.emit('username', username);
        document.getElementById("komodoUsername").textContent = username;
    }else{
        document.getElementById("message").innerHTML += "\nusername or password incorrect!! plz retype";
        alert("username or password incorrect!!");
    }
});

socket.on('DBQueryRegisterReply', function(msg){
    if(msg.check == "True"){
        document.getElementById("message").innerHTML += "\nregistration successful!!!";
        document.getElementById("message").innerHTML += "\nWelcome " + msg.un;
        document.forms["registerDatabase"]["usernameRegister"].value = "";
        document.forms["registerDatabase"]["passwordRegister"].value = "";
        document.forms["registerDatabase"]["repasswordRegister"].value = "";
        document.forms["registerDatabase"]["emailRegister"].value = "";
        document.getElementById("defaultOpen").disabled = true;
        document.getElementById("KomodoTAB").click();
    }else{
        document.getElementById("message").innerHTML += "\nregistration failed!!!";
        alert("username exists!!");
    }
});

socket.on('createRoom', function(msg){
    document.getElementById("message").innerHTML += msg;
});

socket.on('message', function(msg){
    document.getElementById("message").innerHTML += msg;
});

socket.on('komodo_createAssetReply', function(msg){
    document.getElementById("message").innerHTML += msg;
    document.getElementById("assetchainLocalhost").readOnly = true;
    document.getElementById("assetchainPort").readOnly = true;
    document.getElementById("assetchainUsername").readOnly = true;
    document.getElementById("assetchainPassword").readOnly = true;
    document.getElementById("assetchainEnter").readOnly = true;
});



socket.on('joinExistingRooms_Decision', function(msg){
    document.getElementById("message").innerHTML += msg.message;
    document.getElementById("message").innerHTML += msg.decision;
    if(msg.decision == "O"){
        //document.getElementById("message").innerHTML += "\n Playing as X";
        decisionX();
    }else{
        //document.getElementById("message").innerHTML += "\n Playing as O";
        decisionO();
    }
});


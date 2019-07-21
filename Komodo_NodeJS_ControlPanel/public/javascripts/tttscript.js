var playas = "";

function onclicktttone(){
    if(playas == "X"){
        document.getElementById('tttone').innerHTML = "X";
    }else if(playas == "O"){
        document.getElementById('tttone').innerHTML = "O";
    }else{
        document.getElementById('tttone').innerHTML = "";
    }
}

function onclickttttwo(){
    if(playas == "X"){
        document.getElementById('ttttwo').innerHTML = "X";
    }else if(playas == "O"){
        document.getElementById('ttttwo').innerHTML = "O";
    }else{
        document.getElementById('ttttwo').innerHTML = "";
    }
}

function onclicktttthree(){
    if(playas == "X"){
        document.getElementById('tttthree').innerHTML = "X";
    }else if(playas == "O"){
        document.getElementById('tttthree').innerHTML = "O";
    }else{
        document.getElementById('tttthree').innerHTML = "";
    }
}

function onclicktttfour(){
    if(playas == "X"){
        document.getElementById('tttfour').innerHTML = "X";
    }else if(playas == "O"){
        document.getElementById('tttfour').innerHTML = "O";
    }else{
        document.getElementById('tttfour').innerHTML = "";
    }
}

function onclicktttfive(){
    if(playas == "X"){
        document.getElementById('tttfive').innerHTML = "X";
    }else if(playas == "O"){
        document.getElementById('tttfive').innerHTML = "O";
    }else{
        document.getElementById('tttfive').innerHTML = "";
    }
}

function onclicktttsix(){
    if(playas == "X"){
        document.getElementById('tttsix').innerHTML = "X";
    }else if(playas == "O"){
        document.getElementById('tttsix').innerHTML = "O";
    }else{
        document.getElementById('tttsix').innerHTML = "";
    }
}

function onclicktttseven(){
    if(playas == "X"){
        document.getElementById('tttseven').innerHTML = "X";
    }else if(playas == "O"){
        document.getElementById('tttseven').innerHTML = "O";
    }else{
        document.getElementById('tttseven').innerHTML = "";
    }
}

function onclickttteight(){
    if(playas == "X"){
        document.getElementById('ttteight').innerHTML = "X";
    }else if(playas == "O"){
        document.getElementById('ttteight').innerHTML = "O";
    }else{
        document.getElementById('ttteight').innerHTML = "";
    }
}

function onclicktttnine(){
    if(playas == "X"){
        document.getElementById('tttnine').innerHTML = "X";
    }else if(playas == "O"){
        document.getElementById('tttnine').innerHTML = "O";
    }else{
        document.getElementById('tttnine').innerHTML = "";
    }
}

function playasBXFun(){
    playas = "X";
    document.getElementById("playasBX").disabled = true;
    document.getElementById("playasBO").disabled = true;
    document.getElementById("playasType").innerHTML = "X";
    socket.emit('createRoom', {name:"room1", decision:"X"});
    document.getElementById("roomDescp").innerHTML = "Room Created:- room1";
    document.getElementById('message').innerHTML += "Player 1 ready to play as X\n";
    document.getElementById('message').innerHTML += "Player 1 waiting for Player 2 in room <>\n";

}

function playasBOFun(){
    playas = "O";
    document.getElementById("playasBX").disabled = true;
    document.getElementById("playasBO").disabled = true;
    document.getElementById("playasType").innerHTML = "0";
    socket.emit('createRoom', {name:"room1", decision:"O"});
    document.getElementById("roomDescp").innerHTML = "Room Created:- room1";
    document.getElementById('message').innerHTML += "Player 1 ready to play as 0\n";
    document.getElementById('message').innerHTML += "Player 1 waiting for Player 2 in room <>\n";
}

function myjoinroomFunction(){
    var rname = document.getElementById("roomNameText").value;
    socket.emit('joinExistingRooms', rname);
}

function decisionX(){
    playas = "X";
    document.getElementById("playasBX").disabled = true;
    document.getElementById("playasBO").disabled = true;
    document.getElementById("playasType").innerHTML = "X";
    document.getElementById('message').innerHTML += "Player is ready to play as X\n";

}

function decisionO(){
    playas = "O";
    document.getElementById("playasBX").disabled = true;
    document.getElementById("playasBO").disabled = true;
    document.getElementById("playasType").innerHTML = "0";
    document.getElementById('message').innerHTML += "Player is ready to play as 0\n";
}
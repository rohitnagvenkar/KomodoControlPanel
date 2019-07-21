//18.222.85.188:14166/
//"user3348574252"
//"pass47c944b21075f626d9fd868903c1c15f53a817db3ed3e760996e887a02f7ebc2e0"

function connectAsset(){
    var aclocalhost = document.forms["assetChainForm"]["assetchainLocalhost"].value;
    var acport = document.forms["assetChainForm"]["assetchainPort"].value;
    var acusername = document.forms["assetChainForm"]["assetchainUsername"].value;
    var acpassword = document.forms["assetChainForm"]["assetchainPassword"].value;
    socket.emit('komodo_createAsset',{aclocalhost: aclocalhost, acport: acport, acusername:acusername, acpassword:acpassword, accommand:"getbalance"});
}

function acgetnetworkinfo(){
    var aclocalhost = document.forms["assetChainForm"]["assetchainLocalhost"].value;
    var acport = document.forms["assetChainForm"]["assetchainPort"].value;
    var acusername = document.forms["assetChainForm"]["assetchainUsername"].value;
    var acpassword = document.forms["assetChainForm"]["assetchainPassword"].value;
    socket.emit('komodo_createAsset',{aclocalhost: aclocalhost, acport: acport, acusername:acusername, acpassword:acpassword, accommand:"getnetworkinfo"});
}

function acgetbalance(){
    var aclocalhost = document.forms["assetChainForm"]["assetchainLocalhost"].value;
    var acport = document.forms["assetChainForm"]["assetchainPort"].value;
    var acusername = document.forms["assetChainForm"]["assetchainUsername"].value;
    var acpassword = document.forms["assetChainForm"]["assetchainPassword"].value;
    socket.emit('komodo_createAsset',{aclocalhost: aclocalhost, acport: acport, acusername:acusername, acpassword:acpassword, accommand:"getbalanceR"});
}

function acgetwalletinfo(){
    var aclocalhost = document.forms["assetChainForm"]["assetchainLocalhost"].value;
    var acport = document.forms["assetChainForm"]["assetchainPort"].value;
    var acusername = document.forms["assetChainForm"]["assetchainUsername"].value;
    var acpassword = document.forms["assetChainForm"]["assetchainPassword"].value;
    socket.emit('komodo_createAsset',{aclocalhost: aclocalhost, acport: acport, acusername:acusername, acpassword:acpassword, accommand:"getwalletinfo"});
}


function acgetnewaddress(){
    var aclocalhost = document.forms["assetChainForm"]["assetchainLocalhost"].value;
    var acport = document.forms["assetChainForm"]["assetchainPort"].value;
    var acusername = document.forms["assetChainForm"]["assetchainUsername"].value;
    var acpassword = document.forms["assetChainForm"]["assetchainPassword"].value;
    socket.emit('komodo_createAsset',{aclocalhost: aclocalhost, acport: acport, acusername:acusername, acpassword:acpassword, accommand:"getnewaddress"});
}

function acstop(){
    var aclocalhost = document.forms["assetChainForm"]["assetchainLocalhost"].value;
    var acport = document.forms["assetChainForm"]["assetchainPort"].value;
    var acusername = document.forms["assetChainForm"]["assetchainUsername"].value;
    var acpassword = document.forms["assetChainForm"]["assetchainPassword"].value;
    socket.emit('komodo_createAsset',{aclocalhost: aclocalhost, acport: acport, acusername:acusername, acpassword:acpassword, accommand:"stop"});
}


function acSend(){
    var aclocalhost = document.forms["assetChainForm"]["assetchainLocalhost"].value;
    var acport = document.forms["assetChainForm"]["assetchainPort"].value;
    var acusername = document.forms["assetChainForm"]["assetchainUsername"].value;
    var acpassword = document.forms["assetChainForm"]["assetchainPassword"].value;
    var acaddress = document.getElementById("assetchainsendtoaddress").value;
    var acKMD = document.getElementById("assetchainsendBTC").value;
    if(!(acaddress == "" && acKMD == "")){
        socket.emit('komodo_createAsset',{aclocalhost: aclocalhost, acport: acport, acusername:acusername, acpassword:acpassword, accommand:"sendtoaddress", acaddress:acaddress, acKMD:acKMD});
    }else {
        document.getElementById("message").innerHTML += "\nOne of the parameters is wrong!!\n";
    }
}

function komodoclear(){
    document.forms["assetChainForm"]["assetchainLocalhost"].value = "";
    document.forms["assetChainForm"]["assetchainPort"].value = "";
    document.forms["assetChainForm"]["assetchainUsername"].value = "";
    document.forms["assetChainForm"]["assetchainPassword"].value = "";
    document.getElementById("assetchainLocalhost").readonly = false;
    document.getElementById("assetchainPort").readonly = false;
    document.getElementById("assetchainUsername").readonly = false;
    document.getElementById("assetchainPassword").readonly = false;
    document.getElementById("assetchainEnter").readonly = false;
}
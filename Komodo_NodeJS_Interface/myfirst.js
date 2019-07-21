const request = require('request');

// User and password specified like so: node index.js username password.
let username = process.argv.length < 2 ? "default-username" : process.argv[2];
let password = process.argv.length < 3 ? "default-password" : process.argv[3];

let options = {
    url: "http://18.222.85.188:14166",
    method: "post",
    headers:
    { 
     "content-type": "text/plain"
    },
    auth: {
        user: username,
        pass: password
    },
    body: JSON.stringify( {"jsonrpc": "1.0", "id": "curltest", "method": "getbalance", "params": ["", 6] })
};

request(options, (error, response, body) => {
    if (error) {
        console.error('An error has occurred: ', error);
    } else {
        console.log('Post successful: response: ', body);
    }
});
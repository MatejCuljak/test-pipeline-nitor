const liveServer = require("live-server");
 
var params = {
    port: 5500, // Set the server port. Defaults to 8080.
    host: "192.168.2.34", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    //root: "../public/", // Set root directory that's being served. Defaults to cwd.
    open: false, // When false, it won't load your browser by default.
    ignore: 'scss,my/templates', // comma-separated string for paths to ignore
    file: "/public/index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    mount: [['/components', './node_modules']], // Mount a directory to a route.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);

var fs = require("fs");
 
module.exports = {
    cert: fs.readFileSync(__dirname + "/server.cert"),
    key: fs.readFileSync(__dirname + "/server.key"),
    passphrase: "12345"
};
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function shutDownServer(){
    rl.question("Type Y to end server ", (response)=> {
        if(response == "Y" || response == "y"){
            rl.close();
            liveServer.shutdown();
            process.exit();
        }else{
            startAgain();
            rl.close();
        }
    });

}

function startAgain(){
    shutDownServer();
}

shutDownServer();

setInterval(() => {
    shutDownServer();
}, 10000);
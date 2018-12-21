/*--------------------------------------------------------------
 *  Copyright (c) TheYkk(Yusuf Kaan Karakaya <yusufkaan142@gmail.com>). All rights reserved.
 *  Licensed under the MIT License.
 *-------------------------------------------------------------*/

var fs = require('fs');
var http = require('http');
var https = require('https');
var chalk = require('chalk');
var log = console.log;


var privateKey  = fs.readFileSync('ssl/server.key', 'utf8');
var certificate = fs.readFileSync('ssl/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);

log(chalk.cyan('Api url (https):')+chalk.yellow(' http://localhost:8443/ ')); 
log(chalk.cyan('Api url (http) :')+chalk.yellow(' http://localhost:8080/ '));  


app.get('/', function (req, res) {
    res.send('Hello World!')
  })

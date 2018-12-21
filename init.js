var db    = require('./db');
var utils = require('./utils/funcs');
var chalk = require('chalk');
var log = console.log;

db.configs.findOne({token:{ $exists: true }},function (err,doc) { 
    if (doc){
        log(chalk.red('Alredy Setup!'));
        process.exit();
    }else {
        //Kurulum
       db.configs.insert({token : utils.rand()}, function (err, newDoc) { // Callback is optional
           log(chalk.cyan("Root token : ")+chalk.yellow(newDoc.token));
       });
    }
    
});


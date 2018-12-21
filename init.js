var db    = require('./db');
var utils = require('./utils/funcs');
var chalk = require('chalk');
var log = console.log;

db.configs.findOne({token:{ $exists: true }},function (err,doc) { 
    if (doc){
        log(chalk.red('Alredy Setup!'));
        db.configs.update({ token: '0.rn4ymmoia0eas3p5sxu5ck' }, { $inc: { "data.satellites":Math.random(), "data.red": true } }, { upsert: true }, function (err, numReplaced) {
            // numReplaced = 3
            // Field 'system' on Mars, Earth, Jupiter now has value 'solar system'
          });
        //process.exit();
    }else {
        //Kurulum
       db.configs.insert({token : utils.rand()}, function (err, newDoc) { // Callback is optional
           log(chalk.cyan("Root token : ")+chalk.yellow(newDoc.token));
       });
    }
    
});


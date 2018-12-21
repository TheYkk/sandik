/*--------------------------------------------------------------
 *  Copyright (c) TheYkk(Yusuf Kaan Karakaya <yusufkaan142@gmail.com>). All rights reserved.
 *  Licensed under the MIT License.
 *-------------------------------------------------------------*/

var path  = require('path');
var db    = require('./db');
var utils = require('./utils/funcs');
var argv  = require('minimist')(process.argv.slice(2));

var router = require('./src/api/router');



/*---------------------------------------------------------------------------*/

// Add doc
// var doc = {
//     user    :  'ykk',
//     pass    :  'ykkykk',
//     time    :  new Date(),
//     token   :  utils.rand()
// };

// db.users.insert(doc, function (err, newDoc) { // Callback is optional

//     console.log(newDoc._id);
// });

/*---------------------------------------------------------------------------*/

// Find all
// db.users.find({}, function (err, docs) {
//     docs.forEach(function (d) {
//         console.log('Saved user:', d._id);
//     });
// });

/*---------------------------------------------------------------------------*/
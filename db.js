var Datastore = require('nedb');

var db = {};

db.configs = new Datastore({
    filename: 'data/db/configs.json',
    autoload: true
});

db.users = new Datastore({
    filename: 'data/db/users.json',
    autoload: true
});
db.perms = new Datastore({
    filename: 'data/db/perms.json',
    autoload: true
});

module.exports = db;
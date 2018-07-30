var pg = require('pg');
config = require('../config.js');
db = config.database;
var pgClient = new pg.Client(db);
pgClient.connect();
var query = pgClient.query("SELECT comment from Comments").then(result => {
        console.log(result);

        if(result == 0)
        {
            console.log(send('Unknown database!'));
        }
        else if(result == 1)
        {
            console.log('Error trying to connect!');
        }
        else if(result == 2)
        {
            console.log('Connection done!');
        }
        pgClient.end()
    }
);



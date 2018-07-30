var pg = require('pg');
config = require('../config.js');
db = config.database;
var pgClient = new pg.Client(db);
pgClient.connect();
var query = pgClient.query("SELECT comment from Comments").then(result => {
   console.log(result);

    if(result == 0)
    {
      res.send('Unknown database!');
    }
    else if(result == 1)
    {
      res.send('Error trying to connect!')
    }
    else if(result == 2)
    {
     res.send('Connection done!')
    }
   pgClient.end()
    }
);



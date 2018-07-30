const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();
const pg = require('pg');
const config = require('../config.js');

var PythonShell = require('python-shell');


app.get('/Home', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});
app.get('/About', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});
app.get('/Chess', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});
app.get('/Resume', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});

app.get('/GetComments', (req, res) => {
    pgClient.query("TABLE comments").then(result => {
            res.json(result.rows)
        }
    );
});

app.post('/PostComment', function (req, res, next) {
    const user = req.body
    pg.connect(conString, function (err, client, done) {
        if (err) {
            // pass the error to the express error handler
            return next(err)
        }
        client.query('INSERT INTO Comments (name, age) VALUES ($1, $2);', [user.name, user.age], function (err, result) {
            done() //this done callback signals the pg driver that the connection can be closed or returned to the connection pool

            if (err) {
                // pass the error to the express error handler
                return next(err)
            }

            res.send(200)
        })
    })
})

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../react-client/dist`));



// # State = {board, turn, en pass, half move, full move, castle perms, wk sq, bk sq]}
// init_state = [init_board, 0, -1, 0, 1, [0, 0, 0, 0], init_board.index('K'), init_board.index('k')]



var options = {
    mode: 'text',
    scriptPath: `${__dirname}/../IZII/`,
    args: ["none"]
};

app.get('/play-chess', (req, res) => {

    options['args'] = [req.query['board'], "1", "-1", "0", "1", req.query['castle_perms']]   // blacks turn (computer play)
    console.log("options in play-chess: ", options['args'])
    try {
        PythonShell.run('get_move.py', options, function (err, results) {

            if (err) throw err;
            console.log('results: %j', results);
            if (results != null) {
                res.send(results.toString())
            }
        });
    }
    catch (err) {
        console.log("had an error....oops")

    }
});

app.get('/validate_move', (req, res) => {
    options['args'] = [req.query['board'], "0", "-1", "0", "1", req.query['castle_perms'], req.query['piece_position'],
        req.query['to_square']]

    try {
        PythonShell.run('validate_move.py', options, function(err, results) {
            if (err) throw err;
            console.log("with %s", req.query['castle_perms'])
            console.log('results of validate: %j', results);
            if (results != null) {
                res.send(results.toString())
            }
        });

    }
    catch (err) {
        console.log("had an error ... ooooops")
    }
});


db = config.database;
var pgClient = new pg.Client(db);
pgClient.connect().then()
{
    console.log('DB Connected')
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}!`);
    });
}

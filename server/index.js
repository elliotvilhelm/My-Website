const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();

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


app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../react-client/dist`));



// # State = {board, turn, en pass, half move, full move, castle perms, wk sq, bk sq]}
// init_state = [init_board, 0, -1, 0, 1, [0, 0, 0, 0], init_board.index('K'), init_board.index('k')]


var board = "";
var move = "1";
var piece = "";
var index = "";
var from_sq = "";
var to_sq = "";


var options = {
    mode: 'text',
    scriptPath: `${__dirname}/../IZII/`,
    args: ["none"]
};

app.get('/play-chess', (req, res) => {

    options['args'] = [req.query['board'], "1", "-1", "0", "1", "0000"]   // blacks turn (computer play)
    console.log("options in play-chess: ", options['args'])
    try {
        PythonShell.run('get_move.py', options, function (err, results) {

            if (err) throw err;
            console.log('results: %j', results);
            // console.log(req.query)
            if (results != null) {
                console.log("logging results")
                console.log(results.toString())
                console.log("finished logging results")
                res.send(results.toString())
            }
        });
    }
    catch (err) {
        console.log("had an error....oops")

    }
});

app.get('/validate_move', (req, res) => {
    options['args'] = [req.query['board'], "0", "-1", "0", "1", "0000", req.query['piece_position'],
        req.query['to_square']]
    try {
        console.log("options in validate moves: ", options)
        PythonShell.run('validate_move.py', options, function(err, results) {
            if (err) throw err;
            console.log('results: %j', results);
            if (results != null) {
                res.send(results.toString())
            }
        });

        }
        catch (err) {
        console.log("had an error ... ooooops")
    }
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

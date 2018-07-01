const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();

var PythonShell = require('python-shell');




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

app.get('/chess', (req, res) => {

    options['args'] = [req.query['board'], "1", "-1", "0", "0", "0000"]   // blacks turn (computer play)
    console.log(options['args'])
    PythonShell.run('test.py', options, function (err, results) {

        if (err) throw err;
        console.log('results: %j', results);
        console.log(req.query)
        res.send(results.toString())
    });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

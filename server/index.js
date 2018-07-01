const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();

var PythonShell = require('python-shell');
var options = {
    mode: 'text',
    scriptPath: `${__dirname}/../server/`
};



app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../react-client/dist`));





app.get('/chess', (req, res) => {
    PythonShell.run('test.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log('results: %j', results);
        console.log(req.query)
        res.send(results.toString())
    });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

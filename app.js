const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/hello', (req, res) => {
    res.send('Hello!')
});

//This will look like localhost:3000/hello/Ben?last=Basinski
app.get('/hello/:first', (req, res) => {
    var first = req.params.first;
    var last = req.query.last;
    var fullname = first + ' ' + last;

    res.send('Hello '+ fullname + '!');
});

app.get('/test', function(req, res){
    res.send('id: ' + req.query.id);
  });

app.listen(3000, () => console.log('Example app listening on port 3000!'));
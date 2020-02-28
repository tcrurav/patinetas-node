var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var bicycles = [
    { id: 1, brand: "BH", model: "Star"},
    { id: 2, brand: "Orbea", model: "skyline"},
];

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/bicycles', function (req, res) {
    res.send(bicycles);
});

app.post('/bicycle', function (req, res) {
    bicycles.push({
        id: req.body.id,
        brand: req.body.brand,
        model: req.body.model
    });
    res.send(bicycles);
});

app.delete('/bicycle/:bicycle_id', function (req, res) {
    // var bicycle = bicycles.find({ id: req.param.bicycle_id });
    // bicycle.delete();
    console.log(req.params.bicycle_id)
    bicycles = bicycles.filter(function(ele){
        console.log(ele);
        
        return ele.id != req.params.bicycle_id;
    });
    res.send(bicycles);
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
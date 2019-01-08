//jshint esversion:6

//libraries required for node
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const port = 3000;

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  console.log(result);
  res.send("the results are: " + result);
});

app.get('/bmicalculator', function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmicalculator', function(req, res){

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("Your BMI level is : " + bmi);
});

app.get('/apft', function(req, res){
  res.sendFile(__dirname + "/apft.html");
});

app.post('/apft', function(req, res){

  var pu = Number(req.body.pushup);
  var su = Number(req.body.situp);
  var mile = parseFloat(req.body.mile);

  var apftResult = "You had completed : " + pu + " Pushups!  <br>" + "You completed : " + su + " Situps <br>" + "You completed the run in : " + mile + "<br>";

  res.send(apftResult);
});

app.listen(port, () => console.log(`Example app is listening to ${port}!`));

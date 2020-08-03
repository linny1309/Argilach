var express = require("express");                                                                                                                                                                                                                                                                                                                                                                       var pass = "Hollylibertyx8"
var mysql = require("mysql");
var app = express();

var transaction_id = [];
var chart_type = [];
var date = [];
var dimension_1 = [];
var dimension_2 = [];
var measure_1 = [];
var measure_2 = [];

var connection = mysql.createConnection({
//properties
    host:'localhost',
    user:'root',
    password: pass,
    database: 'argilach'
});

connection.connect(function(error) {
    if(!!error) {
        console.log(error);
    }
    else {
        console.log('Connected');
    }
});

app.get('/', function(req, resp) {
    connection.query("SELECT * FROM data", function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            for(var i = 0; i < rows.length; i++) {
                setValue(transaction_id, rows[i].transaction_id);
                setValue(chart_type, rows[i].chart_type);
                setValue(date, rows[i].date);
                setValue(dimension_1, rows[i].dimension_1);
                setValue(dimension_2, rows[i].dimension_2);
                setValue(measure_1, rows[i].measure_1);
                setValue(measure_2, rows[i].measure_2);
            }
        }
    })
}); 

function setValue(arr, value) {
    arr.push(value);
    console.log(value);
}

app.listen(1337);

































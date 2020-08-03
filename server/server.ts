import { routes } from './routes';
import { SSL_OP_NO_QUERY_MTU } from 'constants';

var pages = ['c-cjs-bar-chart','c-cjs-line-chart','c-cjs-pie-chart','c-cjs-bubble-chart','c-cjs-scatter-plot','c-cjs-radar-chart','c-cjs-combo-chart','c-gen-table','c-gen-table','c-gen-table','c-gen-table','c-gen-table','c-gen-table','c-gen-table','c-gen-table','c-cjs-gran-chart','c-gen-table'];
var type = ['pie_chart','line_chart','bar_chart','kpi_cards','bubble_chart','scatter_plot','radar_chart','combo_chart','gran_chart'];
let n = 0;

var queries = [
    'SELECT date, dimension_1, measure_1 FROM visual WHERE chart_type = \"bar_chart\"',
    'SELECT * FROM visual WHERE chart_type = \"line_chart\"',
    'SELECT * FROM visual WHERE chart_type = \"pie_chart\"',
    'SELECT dimension_1, dimension_2, measure_1, measure_2 FROM visual WHERE chart_type = \"bubble_chart\"',
    'SELECT * FROM visual WHERE chart_type = \"scatter_plot\"',
    'SELECT * FROM visual WHERE chart_type = \"radar_chart\"',
    'SELECT * FROM visual WHERE chart_type = \"combo_chart\"',
    'SELECT date, brand, market_share FROM pie_chart',
    'SELECT date, website, paid_search_clicks FROM line_chart',
    'SELECT date, os, paid_clicks FROM bar_chart',
    'SELECT kpi_id, kpi_title FROM kpi_cards',
    'SELECT yrs_invest, brand, roi, tot_invest FROM bubble_chart',
    'SELECT scatter_plot_entry, no_orders, age FROM scatter_plot',
    'SELECT brand, emotion, customers FROM radar_chart',
    'SELECT qtr, bulk_orders, orders_per_cust FROM combo_chart',
    'SELECT * FROM gran_data',
    'SELECT patient_id, qty_ordered FROM gran_data'
];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            var pass = "Hollylibertyx8"                                                                                                                                                                                                                                                                                                                                                   
var mysql = require("mysql");
const express = require("express");
const app = express();

var data;

var connection = mysql.createConnection({
//properties
    host:'localhost',
    user:'root',
    password: pass,
    database: 'argilach_dashboard'
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
    connection.query(queries[0], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(0);
            data = rows;
            createJSON(data,pages[0],'');
        }
    })
    connection.query(queries[1], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(1);
            data = rows;
            createJSON(data,pages[1],'');
        }
    })
    connection.query(queries[2], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(2);
            data = rows;
            createJSON(data,pages[2],'');
        }
    })
    connection.query(queries[3], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(3);
            data = rows;
            createJSON(data,pages[3],'');
        }
    })
    connection.query(queries[4], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(4);
            data = rows;
            createJSON(data,pages[4],'');
        }
    })
    connection.query(queries[5], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(5);
            data = rows;
            createJSON(data,pages[5],'');
        }
    })
    connection.query(queries[6], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(6);
            data = rows;
            createJSON(data,pages[6],'');
        }
    })
    connection.query(queries[7], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(7);
            data = rows;
            createJSON(data,pages[7],type[0]);
        }
    })
    connection.query(queries[8], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(8);
            data = rows;
            createJSON(data,pages[8],type[1]);
        }
    })
    connection.query(queries[9], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(9);
            data = rows;
            createJSON(data,pages[9],type[2]);
        }
    })
    connection.query(queries[10], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(10);
            data = rows;
            createJSON(data,pages[10],type[3]);
        }
    })
    connection.query(queries[11], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(11);
            data = rows;
            createJSON(data,pages[11],type[4]);
        }
    })
    connection.query(queries[12], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(12);
            data = rows;
            createJSON(data,pages[12],type[5]);
        }
    })
    connection.query(queries[13], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(13);
            data = rows;
            createJSON(data,pages[13],type[6]);
        }
    })
    connection.query(queries[14], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(14);
            data = rows;
            createJSON(data,pages[14],type[7]);
        }
    })
    connection.query(queries[15], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(15);
            data = rows;
            createJSON(data,pages[15],'');
        }
    })
    connection.query(queries[16], function(error,rows,fields) {
        if(!!error){
            console.log('Error in the query');
        }
        else {
            console.log(16);
            data = rows;
            createJSON(data,pages[16],type[8]);
        }
    })
});

app.listen(1337);

var fs = require('fs');

function createJSON(rows,vis,type) {

    var jsonData = JSON.stringify(rows);

    //console.log(rows[0]);

        if(JSON.stringify(rows) != undefined) {

            if(vis != 'c-gen-table') {

            fs.writeFile("../src/app/" + vis + "/json/data.json", jsonData, function(err, result) {
                if(err) console.log('error', err);
            });
            }
            else {
                fs.writeFile("../src/app/" + vis + "/json/" +  type  + ".json", jsonData, function(err, result) {
                    if(err) console.log('error', err);
                });
            }
        }

}




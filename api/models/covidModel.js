'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    region: {
        name: {
            type: String,
            required: 'Kindly enter the lname of task'
        }, 
        avgAge: {
            type: Number,
            mongodb: {
                dataType: "Decimal128"
            },
            required: 'Kindly enter the fname of task'
        },
        avgDailyIncomeInUSD: {
            type: Number,
            required: 'Kindly enter the lname of task'
        },
        avgDailyIncomePopulation: {
            type: Number,
                mongodb:{
                    dataType:"Decimal128"
                },
            required: 'Kindly enter the fname of task'
        }
    },
    
    periodType:{
        type: String
    },
    timeToElapse: {
        type: Number
    },
    reportedCases: {
        type: Number
    },
    population: {
        type: Number
    },
    totalHospitalBeds: {
        type: Number
    }       
    
});
module.exports = mongoose.model('Tasks',TaskSchema);
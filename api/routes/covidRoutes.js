'use strict';
module.exports = function(app){
    var todoList = require('../controllers/covidController');

    // todoList Routes
    app.route('/api/v1/on-covid-19')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

    app.route('/api/v1/on-covid-19/json')
        .get(todoList.list_all_tasks_json);

    app.route('/api/v1/on-covid-19/logs')
        .get(function (req, res) {

            var fs = require('fs');
            var path = '/access.log';
            var data = {};
            var array = fs.readFileSync(__dirname + path).toString().split("\n");
            
            res.json(array);
        }
        ); 
    app.route('/api/v1/on-covid-19/xml')
        .get(todoList.list_all_tasks_xml);

    app.route('/api/v1/on-covid-19/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

    
    
};
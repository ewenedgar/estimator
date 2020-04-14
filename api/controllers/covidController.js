
var mongoose = require('mongoose'),

    obj2xml = require('../../node_modules/xml-js'),
    Task = mongoose.model('Tasks');
/* var fs = require('fs');
var path = '/access.log';
// path = 'access.log';

exports.logs = function(req, res) {
    var log = fs.readFileSync(__dirname + path).toString().split("\n");
    res.send(log);
}; */


exports.list_all_tasks = function(req, res){
    Task.find({}, function(err,task){
        if(err) {
            res.send(err);
        }
        else{
            res.json(task);
        }
    });
};
exports.list_all_tasks_json = function (req, res) {
    Task.find({}, function (err, task) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(task);
        }
    });
};
exports.list_all_tasks_xml = function (req, res) {
    Task.find({}, function (err, task) {
        if (err) {
            res.send(err);
        }
        else {
            var xml = JSON.stringify(task[0]);
            var options = { compact: true, ignoreComment: true, spaces: 4 };
            var result = obj2xml.json2xml(xml, options);
            res.send(result);
            //  res.json(task[0]);
        }
    });
};
exports.read_a_task = function(req, res){
    Task.findById(req.params.taskId, function(err, task){
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.create_a_task = function(req, res){
    var new_task = new Task(req.body);
    new_task.save(function(err, task){
        if(err)
            res.send(err);
        res.json(task);
    });
};

exports.update_a_task = function(req,res){
    Task.findOneAndUpdate({_id: req.params.task}, req.body, {new: true},
        function(err, task){
            if(err)
                res.send(err);
            res.json(task);
        });
};

exports.delete_a_task = function(req, res){
    Task.remove({
        _id: req.params.taskId}, 
        function(err, task){
            if(err)
                res.send(err);
            res.json({ message: 'on-Covid-19 Successfully deleted'});
        });
};
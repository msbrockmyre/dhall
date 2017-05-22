var Stats = require('./stats'),
    Images = require('./images'),
    Comments = require('./comments'),
    async = require('async');

module.exports = function(viewModel, callback){
    async.parallel([
        function(next) {
            Stats(next);
        },
        function(next) {
            Images.popular(next);
        },
        function(next) {
            Comments.newest(next);
        },
        function(next) {
            Images.tags(next);
        },
        function(next) {
            Images.breakfast(next);
        },
        function(next) {
            Images.lunch(next);
        },
        function(next) {
            Images.dinner(next);
        }
    ], function(err, results){
        viewModel.sidebar = {
            stats: results[0],
            popular: results[1],
            comments: results[2],
            tags: results[3],
            breakfast: results[4],
            lunch: results[5],
            dinner: results[6]

        };

        callback(viewModel);
    });
};
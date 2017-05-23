var models = require('../models');

module.exports = {
     popular: function(callback){
          models.Image.find({}, {}, { limit: 9, sort: { likes: -1 }},
            function(err, images) {
                if (err) throw err;

                callback(null, images);
            });
     },
     tags: function(callback){
          
          models.Image.find({ $text: { $search: "dessert"}},
               function(err, images) {
                    if (err) throw err;
                    
                    callback(null, images);
               });
     },
     breakfast: function(callback){
          models.Image.find({ $text: { $search: "breakfast"}},
               function(err, images) {
                    if (err) throw err;
                    
                    callback(null, images);
               });
     },
     lunch: function(callback){
          models.Image.find({ $text: { $search: "lunch"}},
               function(err, images) {
                    if (err) throw err;
                    
                    callback(null, images);
               });
     },
     dinner: function(callback){
          models.Image.find({ $text: { $search: "dinner"}},
               function(err, images) {
                    if (err) throw err;
                    
                    callback(null, images);
               });
     }
};
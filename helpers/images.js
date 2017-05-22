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
          models.Image.find({tags: "dessert"},
               function(err, images) {
                    if (err) throw err;
                    
                    callback(null, images);
               });
     },
     breakfast: function(callback){
          models.Image.find({tags: "breakfast"},
               function(err, images) {
                    if (err) throw err;
                    
                    callback(null, images);
               });
     }
};
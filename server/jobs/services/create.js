var Jobs = require('./../entity/jobs');

var Service = function(req, res, next) {

    var job = new Jobs(req.body);

    job
        .save()
        .then(function(job) {
           if (!job) {
               return res.status(404)
                         .json({
                             status: false,
                             data  : {}
                         });
           }

           return res.status(200)
                     .json({
                         status: true,
                         data  : job
                     });
        })
        .catch(function(err) {
            return res.status(500)
                      .json({
                          status: false,
                          data  : {}
                      });
        });
};

module.exports = Service;

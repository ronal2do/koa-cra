var Jobs = require('./../entity/jobs');

var Service = function(req, res, next) {
    var find = {};

    if (req.params.id) {
        find = Jobs.findById(req.params.id).exec();
    }

    if (!req.params.id) {
        find = Jobs.find({}).exec();
    }

    find
        .then(function(result) {
            if (!result) {
                return res.status(404)
                          .json({
                              status: false,
                              data  : {}
                          });
            }

            return res.status(200)
                      .json(result);
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

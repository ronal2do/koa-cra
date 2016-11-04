var Jobs = require('./../entity/jobs');

var Service = function(req, res, next) {
    var findById = Jobs.findById(req.params.id).exec();
    var remove   = Jobs.remove({
        _id: req.params.id
    });

    findById
        .then(function(product) {
            if (!product) {
                return res.status(404)
                    .json({
                        status: false,
                        data  : {
                            _id: req.params._id
                        }
                    });
            }

            remove
                .exec()
                .then(function() {
                    return res.status(200)
                              .json({
                                  status: true,
                                  data  : product
                              });
                })
                .catch(function(err) {
                    return res.status(500)
                              .json({
                                  status: false,
                                  data  : {}
                              });
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

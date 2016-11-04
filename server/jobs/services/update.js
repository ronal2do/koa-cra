var Jobs = require('./../entity/jobs');

var Service = function(req, res, next) {
    var findById = Jobs.findById(req.params.id).exec();
    var update   = Jobs.update({
        _id: req.params.id
    }, {
        $set: req.body
    }, { multi: false }).exec();

    findById
        .then(function(product) {
            update
                .then(function(result) {
                    if (!result) {
                        return res.status(400)
                            .json({
                                status: false,
                                data  : {}
                            });
                    }

                    return res.status(200)
                        .json({
                            status: true,
                            data: result
                        });
                })
                .catch(function(err) {
                    return res.status(500)
                        .json({
                            status: false,
                            date  : {}
                        });
                });
        })
        .catch(function(err) {
            return res.status(500)
                .json({
                    status: false,
                    date  : {}
                });
        });
};

module.exports = Service;

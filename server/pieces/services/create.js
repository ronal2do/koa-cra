var Jobs = require('../../jobs/entity/jobs');

var Service = function(req, res, next) {
    var findById = Jobs.findById(req.body.job).exec();
    var update   = Jobs.update({
      _id: req.body.job
    }, {
        $push: {
           "pieces": req.body
        }
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
  //
  // db.jobs.find({"_id":"57f44c58d4434ceec4f20611"}),
  //     {
  //         $push: {
  //             "pieces":{ "title":"cubs-killeen", "type":"video", "file":"cubs-killeen" }
  //         }
  //     }
  // );

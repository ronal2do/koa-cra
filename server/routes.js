module.exports = function (app) {
    app.use('/api/pieces', require('./pieces'));
    app.use('/api/jobs', require('./jobs'));
    var contactController = require('./contact/services/create');
    app.post('/api/contact', contactController.contactPost);
};

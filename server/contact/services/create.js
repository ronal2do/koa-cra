var nodemailer = require('nodemailer');

MAILGUN_USERNAME='postmaster@sandbox67c118365e564798a8864434e4b2a3cb.mailgun.org'
MAILGUN_PASSWORD='ed49d942fd9e6c11208ee3aacb29df9d'

var transporter = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: MAILGUN_USERNAME,
    pass: MAILGUN_PASSWORD
  }
});

/**
 * GET /contact
 */
exports.contactGet = function(req, res) {
  res.render('contato', {
    title: 'Contato'
  });
};

/**
 * POST /contact
 */
exports.contactPost = function(req, res) {
  req.assert('name', 'Nome não pode estar em branco').notEmpty();
  req.assert('email', 'Email não é válido').isEmail();
  req.assert('email', 'Email não pode estar em branco').notEmpty();
  req.assert('message', 'Mensagem não pode estar em branco').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }

  var mailOptions = {
    from: req.body.name + ' ' + '<'+ req.body.email + '>',
    to: 'ronal2do@gmail.com',
    subject: '_stq site',
    text: req.body.message
  };

  transporter.sendMail(mailOptions, function(err) {
    console.log('foi');
  });
};

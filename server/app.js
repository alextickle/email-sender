const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Message = require('./models').Message;
const User = require('./models').User;
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());

app.post('/login', (request, response) =>
  User.findOne({
    where: { email: request.body.email }
  })
    .then(user => {
      if (user && user.password === request.body.password) {
        response.status(200);
        response.json({
          user: user
        });
      } else {
        response.status(400);
        response.json({ message: 'invalid email and/or password' });
      }
    })
    .catch(error => {
      response.status(400);
      response.json({ errors: error.errors });
    })
);

app.post('/create-message', (request, response) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log(request.body);
  const msg = {
    to: request.body.recipient,
    from: request.body.sender,
    subject: request.body.subject,
    text: request.body.content,
    html: `<p>${request.body.content}</p>`
  };
  console.log('msg', msg);
  sgMail
    .send(msg)
    .then(resp => {
      return Message.create(request.body);
    })
    .then(message => {
      response.status(200);
      response.json({ message: message });
    })
    .catch(error => {
      response.status(400);
      response.json({ errors: error.errors });
    });
});

app.get('/messages/:id', (request, response) =>
  Message.findAll({
    where: {
      user_id: request.params.id
    }
  })
    .then(messages => {
      response.status(200);
      response.json({ messages: messages });
    })
    .catch(error => {
      response.status(400);
      response.json({ errors: error.errors });
    })
);

app.get('*', (request, response) =>
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
);

app.listen(app.get('port'), () =>
  console.log('Node app is running on port', app.get('port'))
);

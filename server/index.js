const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 5000);

app.post('/login', (request, response) =>
  User.findOne({
    where: { email: request.body.email }
  }).then(user => {
    if (user && user.password === request.body.password) {
      response.status(200);
      response.json({
        message: 'Success!',
        user: user
      });
    } else {
      response.status(400);
      response.json({ message: 'invalid email and/or password' });
    }
  })
);

app.post('/create-message', (request, response) =>
  Message.create({
    content: request.body.content,
    user_id: request.body.user_id
  })
    .then(message => {
      response.status(200);
      response.json({ message: 'success', message: message });
    })
    .catch(error => {
      response.status(400);
      response.json({ message: 'error', errors: error.errors });
    })
);

app.get('/messages', (request, response) =>
  Message.findAll()
    .then(messages => {
      response.status(200);
      response.json({ message: 'success', messages: messages });
    })
    .catch(error => {
      response.status(400);
      response.json({ message: 'error', errors: error.errors });
    })
);

app.get('*', (request, response) =>
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
);

app.listen(app.get('port'), () =>
  console.log('Node app is running on port', app.get('port'))
);

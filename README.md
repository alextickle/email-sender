# email-sender
Website contact form built using Node, React, Express, Postgres, and sendGrid. Deployed to [Heroku](https://send-email-challenge.herokuapp.com/).


### Local Installation
---
Start by cloning and entering the project repo:

```
git clone https://github.com/alextickle/email-sender.git
cd email-sender
```

Once you've downloaded the project, install dependencies:

```
npm install
cd ../client
yarn install
```

You will then need to create a config.json file in the server/config directory, copy the contents of config.example.json into it,
and edit the username and password to match your local postgres account


### Create, Format, and Seed Database
---

Once signed into postgres with the postgres cli enter the following command:

```
CREATE DATABASE "mkdecision_dev";
```

Then navigate to the root of the server directory and run the following sequelize commands:

```
sequelize db:migrate
sequelize db:seed:all
```


### Launch Application
---

To start the application you will need two terminal sessions. Navigate each to the root directory of the project. Use the first to start the express app:

```
cd server
nodemon app.js
```

Use the second terminal session to start the React app:

```
cd client
yarn start
```


### Reformat and Reseed Database
---

 If you already have a local mkdecision_dev database then login to postgres using the cli and run the following commands:

```
\c mkdecision_dev
DROP TABLE "Messages", "Users", "SequelizeMeta" CASCADE;
```

Then quit postgres (\q) and run the two sequelize commands in the server directory:

```
sequelize db:migrate
sequelize db:seed:all
```

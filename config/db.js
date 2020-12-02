const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://edwin:TRY2stayawake1!@cluster0.uiqqy.mongodb.net/ig-login?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose error: ', err);
});

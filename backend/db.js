const mongoose = require('mongoose');

const initializeDbConnection = async () => {
  await mongoose.connect(
    'mongodb://localhost:27017/' + process.env.DB_NAME,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    () => {
      console.log('Connected to db : ' + process.env.DB_NAME);
    }
  );
};

module.exports = initializeDbConnection;

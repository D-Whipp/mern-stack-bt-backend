const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURI');
const db = process.env.DATABASE_URL;
// const uname = process.env.uname;
// const dbpassword = process.env.dbpassword;
// const db =
//   'mongodb+srv://' +
//   uname +
//   ':' +
//   dbpassword +
//   '@devconnector.unlftvb.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(db);
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is listening...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

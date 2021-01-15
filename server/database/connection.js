const mongoose          = require('mongoose');
const URI               = getConnectionURI();

// Get URI
function getConnectionURI() {
  console.log(process.env.NODE_ENV);

  // check for stating
  if (process.env.NODE_ENV === "development") {
    return 'mongodb://127.0.0.1:27017/dev_inspire';
  }
  if (process.env.NODE_ENV === "production") {
    return process.env.DATABASEURI;
  }
}

// Database connection
async function connectToMongoClient(){
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`Connected to ${URI}`);

    return Promise.resolve(true);
  } catch (e) {
    console.error(e);
    return Promise.reject(false);
  }
}

module.exports = connectToMongoClient;
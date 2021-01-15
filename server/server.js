// INSPIRE APP 1.0
const   express           = require('express'),
        dotenv            = require('dotenv').config(),
        port              = process.env.PORT || 9001,
        morgan            = require('morgan'),
        path              = require('path'),
        testAPIRouter     = require('./routes/api'),
        connectToDatabase = require('./database/connection'),
        app               = express();

// Database connection
connectToDatabase();

// Tell node where to serve static files from
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

// Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
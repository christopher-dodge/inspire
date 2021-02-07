// INSPIRE APP 1.0
const   express           = require('express'),
        dotenv            = require('dotenv').config(),
        port              = process.env.PORT || 9001,
        morgan            = require('morgan'),
        path              = require('path'),
        api               = require('./routes/api'),
        connectToDatabase = require('./database/connection'),
        Quote             = require('./models/Quote'),
        app               = express();

// Database connection
connectToDatabase();

// Test insert to db
// const quote = new Quote({
//   author: 'Mr. Bigglesworth',
//   body: "I am a cat, therefore I am."
// })

// quote.save().then((quote) => console.log("Inserted"));

// Find all quotes and return total count
const allQuotes = {};
Quote.find(allQuotes).then((quotes) => console.log(`Found ${quotes.length} quotes in the database`));

// Tell node where to serve static files from
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.use('/api', api);

// Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
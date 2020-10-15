const   express   = require('express'),
        dotenv    = require('dotenv').config();
        port      = process.env.PORT || 3000;
        app       = express();

// Routes
app.get('/', (req, res) => {
    res.send("This will be the Splash page!");
});

// Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
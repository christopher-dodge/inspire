const express   = require('express'),
      router    = express.Router(),
      db        = require('../models');

router.get('/quotes', async (req, res) => {
  try {
    const allQuotes = await db.Quote.find();
    res.json(allQuotes);
  } catch(err) {
    return err;
  }
});

router.post('/quotes', async (req, res) => {
  console.log(req.body);
  
  try {
    const createdQuote = await db.Quote.create(req.body);
    res.json(createdQuote);
  } catch(err) {
    return err;
  }
});

module.exports = router;
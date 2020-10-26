import React from 'react';
import {Button} from '@material-ui/core';

export default function QuoteButton({getRandomQuote}) {

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={getRandomQuote}>
        Genie, Inspire Me
      </Button>
    </div>
  )
}
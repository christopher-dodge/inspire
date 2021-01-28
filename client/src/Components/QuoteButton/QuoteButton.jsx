import React from 'react';
import {Button} from '@material-ui/core';

export default function QuoteButton({getRandomQuote}) {

  return (
    <div>
      <div className="center">
        <Button variant="contained" color="default" onClick={getRandomQuote}>
          Genie, Inspire Me
        </Button>
      </div>
    </div>
  )
}
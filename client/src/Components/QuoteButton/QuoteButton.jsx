import React from 'react';
import {Button} from '@material-ui/core';
// import { useState } from 'react';

export default function QuoteButton() {
  // const [quote, setQuote] = useState('');

  // Click handler method
  const handleButtonClick = function(){
    console.log('The button was clicked!');
  }

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleButtonClick}>
        Genie, Inspire Me
      </Button>
      
    </div>
  )
}
import React from 'react'
import QuoteButton from '../../Components/QuoteButton/QuoteButton';

export default function Splash({getRandomQuote}) {
  return (
    <div>
      <QuoteButton getRandomQuote={getRandomQuote} />
    </div>
  )
}

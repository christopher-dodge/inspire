import React from 'react'

export default function Quote(props) {
  // console.log(props);

  return (
    <div id="quote-container">
      <div className="quote-text">
        <h2>{props.quote.Quote}</h2>
        <h5>{props.quote.Author}</h5>
      </div>
    </div>
  )
}

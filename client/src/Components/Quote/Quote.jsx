import React from 'react'
import Hint from '../../Components/Hint/Hint';

export default function Quote(props) {
  console.log(props);

  document.body.onkeyup = function(e){
    if(e.keyCode === 32){
        // console.log('spacebar was pressed!');
        props.getRandomQuote();
    }
  }

  return (
    // <div onClick={props.getRandomQuote}>
    <div>
      <Hint />
      <div className="center">
        <h2>{props.quote.Quote}</h2>
        <h5>{props.quote.Author}</h5>
      </div>
    </div>
  )
}

import React from 'react'

export default function Quote(props) {
    console.log(props);

    return (
        <div onClick={props.getRandomQuote}>
            <h2>{props.quote.body}</h2>
            <h5>{props.quote.author}</h5>
        </div>
    )
}

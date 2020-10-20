import React from 'react';
import './App.css';
import QuoteButton from './Components/QuoteButton/QuoteButton';
import Quote from './Components/Quote/Quote';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [quote, setQuote] = useState('');

  return (
    <Router>
      <div className="App">
        <QuoteButton />
      </div>
    </Router>
  );
}

export default App;

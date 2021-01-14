import React, {useState, useEffect} from 'react';
import './App.css';
import Quote from './Components/Quote/Quote';
import Splash from './Pages/Splash/Splash';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const quotes = [
    {
        id: 1,
        body: "It's Time to Kick Ass and Chew Bubble Gum",
        author: "Duke Nukem",
    },
    {
        id: 2,
        body: "If not us, who? If not now, when?",
        author: "JFK",
    },
    {
        id: 3,
        body: "A riot is the language of the unheard.",
        author: "Martin Luther King Jr.",
    }
  ];

  const [quote, setQuote] = useState({});
  const [showQuote, setShowQuote] = useState(false);

  const getRandomQuote = () => {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    console.log(quoteIndex);
    setQuote(quotes[quoteIndex]);
    setShowQuote(true);
  }

  // Always fires on component mount
  useEffect(() => {
    
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          { !showQuote && <Route path="/" exact component={() => <Splash getRandomQuote={getRandomQuote} />} /> }
          { showQuote && <Route path="/" component={() => <Quote quote={quote} getRandomQuote={getRandomQuote} /> } /> }
        </Switch>
      </div>
    </Router>
  );
}

export default App;

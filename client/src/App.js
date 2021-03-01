import React, {useState, useEffect} from 'react';
import API from './utils/API';
import Quote from './Components/Quote/Quote';
import QuoteButton from './Components/QuoteButton/QuoteButton';
import Splash from './Pages/Splash/Splash';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  // Hard-coded seed quotes for testing
  // const quotes = [
  //   {
  //       id: 1,
  //       body: "It's Time to Kick Ass and Chew Bubble Gum",
  //       author: "Duke Nukem",
  //   },
  //   {
  //       id: 2,
  //       body: "If not us, who? If not now, when?",
  //       author: "JFK",
  //   },
  //   {
  //       id: 3,
  //       body: "A riot is the language of the unheard.",
  //       author: "Martin Luther King Jr.",
  //   }
  // ];

  const getAllQuotes = async () => {
    const apiResultObject = await API.getQuotes();
    console.log(apiResultObject);
    const allFoundQuotes = apiResultObject.data;
    // console.log(allFoundQuotes);
    setQuotes(allFoundQuotes);
  }

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({});
  const [showQuote, setShowQuote] = useState(false);

  const getRandomQuote = () => {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    console.log(quoteIndex);
    setQuote(quotes[quoteIndex]);
    setShowQuote(true);
  }

  useEffect(() => {
    getAllQuotes();
  }, []);

  return (
    
      <div 
        className="App"
        >
        
          <QuoteButton getRandomQuote={getRandomQuote} />
          { showQuote && <Quote quote={quote} getRandomQuote={getRandomQuote} /> }
        
      </div>
    
  );
}

export default App;

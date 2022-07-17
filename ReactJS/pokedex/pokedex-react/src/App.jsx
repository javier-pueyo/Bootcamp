import './App.scss';
import React from 'react';
import CardList from './components/cardList/cardList';
import Hero from './components/hero/hero';


function App() {
  return (    
    <div className="App">
      <Hero />
      <CardList />
    </div>
  );
}

export default App;

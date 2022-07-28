import './App.scss';
import React from 'react';
import CardList from './components/cardList/cardList';
import Hero from './components/hero/hero';
import Pagination from './components/pagination/pagination';

import { Route, Routes } from 'react-router-dom';
import Search from './components/search/search';


function App() {
  return (
    <main className='App'>
      <Hero />
      <Search />
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/:pageId" element={<CardList />} />
      </Routes>
      {<Pagination />}
    </main> 
  );
}

export default App;

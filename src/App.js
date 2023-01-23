import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import './styles/css/app.min.css';
import Home from './components/Home/Home';
import { useState } from 'react';

const App = () => {
  
  return (
    <div className={`container`}>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <main className='App'></main>
    </div>
  );
};

export default App;

import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import './styles/css/app.min.css';
import Home from './components/Home/Home';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    return setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className={`container ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme}/>
      <Routes>
        <Route path='/' element={<Home theme={theme}/>} />
      </Routes>
      <main className='App'></main>
    </div>
  );
};

export default App;

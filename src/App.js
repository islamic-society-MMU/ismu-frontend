import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import './styles/css/app.min.css';
import Home from './components/Home/Home';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <main className='App'></main>
    </>
  );
};

export default App;

import './assets/styles/css/app.css';
import Header from './header/Header';
import Home from './home/Home';

const App =()=> {

  return (
    <div className='app-container'>
      <Header />
      <Home />
    </div>
  );
}

export default App;

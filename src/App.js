import { Route, Routes } from 'react-router';
import './App.css';
import { BirthdayWishes } from './componets/BirthdayWishes';
import { Home } from './componets/Home';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/wishespage' element={<BirthdayWishes/>}/>
      <Route path='/' element={<Home/>} />
    </Routes>
    
    </div>
  );
}

export default App;

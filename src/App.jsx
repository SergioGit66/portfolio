import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
      <Routes>
        
        <Route path='/home' element={ <Home />}></Route>
        {/* <Route path='/about' element= */}
      
      
      
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SingleRecipe from './pages/SingleRecipe';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/single' element={<SingleRecipe/>}/>
  
</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;

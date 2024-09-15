import React from 'react'
import About from './pages/About';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Header from './component/Header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {

return(
  <div>
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<About/>} />
        <Route path='/contactus' element={<Contactus/>} />
      </Routes>
    </Router>
  </div>
)
}

export default App;

import Header from './compounds/Header';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


import "./styles/App.css"
import Home from './compounds/Home';




function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />}/>
        </Routes>
        

    </Router>
    </>
  );
}

export default App;

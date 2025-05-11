 
import Bienvenue from './bienvenue';
import Header from './header';
import Main from './Main';  
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contacts';

import { Routes, Route } from 'react-router-dom';
import './App.css'

import Footer from './footer';

function App() {
  return (
    <div className="App">
     
      <Header /> 
       <Main />
       <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer/>
        
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import './styles/global.css';
import NavbarComponet from './components/Navbar';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponet /> 
      <Routes />
       
    </BrowserRouter>
     
    
  );
}

export default App;

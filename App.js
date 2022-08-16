import React from 'react';
import './App.css'

import {Footer, Header} from './Componentes/Header-Footer/';
import Rotas from './Componentes/Rotas';

function App() {

  return (
    <div className="App">
      
      <Header />

      <div className='Corpo'>
        <Rotas />
      </div>

      <Footer />

    </div>
  );

}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import './pag-um.css';

export default function PagUm() {
  return (

    <div className="container">

      <h1 className='texto'>HTML</h1>
    
      <img src="https://cdn130.picsart.com/326989740015211.png"></img>

      <label className='legenda'>Escolha o Link:</label>

      <div className='links'>

        <Link className='pag-um' to='/pag-dois'>CSS</Link>
        <Link className='pag-dois' to='/pag-tres'>JS</Link>

      </div>
      
    </div>
  );
}

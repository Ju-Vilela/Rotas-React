import React from 'react';
import { Link } from 'react-router-dom';


export default function Pag-Dois() {
    return (

        <div className="container">

            <h1 className='texto'>CSS</h1>

            //⚠ Não se põe imagem assim no React ⚠
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Notepad_plus_plus.png"></img>

            <label className='legenda'>Escolha o Link:</label>

            <div className='links'>

                <Link className='pag-um' to='/'>HTML</Link>
                <Link className='pag-tres' to='/pag-tres'>JS</Link>

            </div>

        </div>
    
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function PagTres() {
    return (

        <div className="container">

            <h1 className='texto'>JavaScript</h1>

            <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png"></img>

            <label className='legenda'>Escolha o Link:</label>

            <div className='links'>

                <Link className='pag-um' to='/'>HTML</Link>
                <Link className='pag-dois' to='/pag-dois'>CSS</Link>

            </div>

        </div>

  );
}

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Pag-Tres from '../Paginas/pag-tres/';
import Pag-Dois from '../Paginas/pag-dois/';
import Pag-Um from '../Paginas/pag-um/';

const Rotas = () => (
    <BrowserRouter>
        <Routes>

            <Route exact path = '/' element = { <Pag-Um /> } />
            <Route path = '/pag-dois' element = { <Pag-Dois /> } />
            <Route path = '/pag-tres' element = { <Pag-tres /> } />

        </Routes>
    </BrowserRouter>
)

export default Rotas;

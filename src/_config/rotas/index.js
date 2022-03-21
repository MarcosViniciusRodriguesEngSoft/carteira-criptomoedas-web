import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/home';


function Rotas (){
    return (
    <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
    </Router>
    );
}

export default Rotas;
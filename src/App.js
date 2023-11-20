import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Table from './Table';
import BasesDados from './Dados';
import EtecAlbertEinstein from './Etec-Albert/EtecAlbertEinstein';
import CadL from './Etec-Albert/cadastroL';
import Register from './Register';
import Emprestimos from './Emprestimos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/BasesDados" element={<BasesDados />} />
        <Route path="/Instituicao/Etec" element={<EtecAlbertEinstein />} />
        <Route path="/Livros" element={<Table />} />
        <Route path="/CadastroLi" element={<CadL />} />
        <Route path="/Registro" element={<Register />} />  
        <Route path="/Emprestimos" element={<Emprestimos />} />  

      </Routes>
    </Router>
  );
}

export default App;

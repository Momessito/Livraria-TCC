import React, { useEffect, useState } from "react";
import {
  getInstituicoes,
  getProfessores,
  getLivros,
} from "../BackEnd/Firebase";
import logo from '../imgs/Didactoicon.png'

const Footer = () => {
  const [instituicoes, setInstituicoes] = useState([]);
  const [professores, setProfessores] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {

  }, []);
  return (
<footer className="footer items-center p-4 bg-neutral text-neutral-content" style={{ backgroundColor: 'rgb(0, 168, 244)' }}>
  <aside className="items-center grid-flow-col">
    <img src={logo} width='80px'/>
    <p className="text-white">Copyright © 2023 - Todos Os Direitos Reservados</p>
  </aside> 

</footer>
  );
};

export default Footer;

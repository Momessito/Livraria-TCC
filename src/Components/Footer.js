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
    const fetchData = async () => {
      try {
        // Consultar instituições
        const instituicoesData = await getInstituicoes();
        console.log("Dados de Instituições:", instituicoesData);
        setInstituicoes(instituicoesData);

        // Consultar professores
        const professoresData = await getProfessores();
        console.log("Dados de Professores:", professoresData);
        setProfessores(professoresData);

        // Consultar livros
        const livrosData = await getLivros();
        console.log("Dados de Livros:", livrosData);
        setLivros(livrosData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
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

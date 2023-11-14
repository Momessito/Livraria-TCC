import React, { useEffect, useState } from "react";
import {
  getInstituicoes,
  getProfessores,
  getLivros,
} from "../BackEnd/Firebase";

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
    <div>
      <h2>Instituições</h2>
      <ul>
        {instituicoes.map((instituicao) => (
          <li key={instituicao.id}>{instituicao.nome}</li>
        ))}
      </ul>

      <h2>Professores</h2>
      <ul>
        {professores.map((professor) => (
          <li key={professor.id}>{professor.nome}</li>
        ))}
      </ul>

      <h2>Livros</h2>
      <ul>
        {livros.map((livro) => (
          <li key={livro.id}>{livro.titulo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;

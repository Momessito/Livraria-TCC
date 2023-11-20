import { React, useEffect, useState } from "react";
import { FieldValue, auth, db, getLivros } from "./BackEnd/Firebase";
import Alert from './Components/Alert';
import { Link } from "react-router-dom";
import firebase from "./BackEnd/Firebase";
const { firestore } = firebase;

export default function Table() {
  const [selectAll, setSelectAll] = useState(false);
  const [books, setbooks] = useState([]);
  const [quantidadeReservar, setQuantidadeReservar] = useState(0);
  const [quantidadeReservarInt, setQuantidadeReservarInt] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [quantidadeExcluir, setQuantidadeExcluir] = useState(0);
  const [alunosAssociados, setAlunosAssociados] = useState(Array.from({ length: 0 }, () => ''));
  const [livroSelecionado, setLivroSelecionado] = useState(null);


  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        console.log('logado')
      } else {
        setIsLoggedIn(false);
        console.log('deslogado');
        window.location.href = '/';
      }
    });

    return () => unsubscribe();




  }, []);

  useEffect(() => {
    setQuantidadeExcluir(0);
  }, []);

  useEffect(() => {

    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      // Consultar livros
      const livrosData = await getLivros();
      console.log("Dados de Livros:", livrosData);
      setbooks(livrosData);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };
  const handleExcluir = async (livroId, quantidadeExcluir) => {
    quantidadeExcluir = Number(quantidadeExcluir);
    try {
      const livrosRef = db.collection('livros');
      const docRef = livrosRef.doc(livroId);

      // Verifica se a quantidade a ser excluída é menor que a quantidade atual
      const livroSelecionado = books.find((livro) => livro.id === livroId);

      if (quantidadeExcluir < livroSelecionado.quantidade) {
        // Atualiza a quantidade subtraindo a quantidadeExcluir
        await docRef.update({
          quantidade: FieldValue.increment(+(-quantidadeExcluir)),
        });

        // Atualize o estado `books` para refletir a alteração no front-end
        const novosLivros = books.map((livro) =>
          livro.id === livroId
            ? { ...livro, quantidade: livro.quantidade - quantidadeExcluir }
            : livro
        );
        setbooks(novosLivros);

        console.log(`Quantidade de ${quantidadeExcluir} livro(s) editada com sucesso!`);
      } else {
        // Se a quantidade a ser excluída for maior ou igual à quantidade atual, exclui o livro
        await docRef.delete();

        // Atualize o estado `books` para refletir a exclusão no front-end
        const novosLivros = books.filter((livro) => livro.id !== livroId);
        setbooks(novosLivros);

        console.log('Livro excluído com sucesso!');
      }

    } catch (error) {
      console.error('Erro ao editar/excluir livro:', error);
    }
  };


  const handleQuantidadeChange = (novaQuantidade) => {
    setQuantidadeReservar(novaQuantidade);
    setAlunosAssociados(Array.from({ length: novaQuantidade }, () => ''));
  };

  const handleAlunoChange = (index, novoNome) => {
    const novosAlunos = [...alunosAssociados];
    novosAlunos[index] = novoNome;
    setAlunosAssociados(novosAlunos);
  };

const handleEmprestimo = async (
  livroId,
  quantidadeReservar,
  alunosAssociados,
  nome,
  editora,
  imagem,
  materia,
  validade
) => {
  quantidadeReservar = Number(quantidadeReservar);

  try {
    const livrosRef = db.collection('livros');
    const livrosEmprestadosRef = db.collection('livrosEmprestados');
    const docRef = livrosRef.doc(livroId);

    // Debugging
    console.log('Livro ID:', livroId);
    console.log('Quantidade a reservar:', quantidadeReservar);
    console.log('Alunos Associados:', alunosAssociados);

    // Verifica se a quantidade a ser reservada é menor que a quantidade atual
    const livroSnapshot = await docRef.get();

    if (!livroSnapshot.exists) {
      console.log(`Livro com ID ${livroId} não encontrado.`);
      return;
    }

    const livroSelecionado = livroSnapshot.data();

    if (quantidadeReservar < livroSelecionado.quantidade) {
      // Debugging
      console.log('Reservando livro...');

      // Atualiza a quantidade subtraindo a quantidadeReservar
      const quantidadeAtual = livroSelecionado.quantidade;
      await docRef.update({
        quantidade: quantidadeAtual - quantidadeReservar,
      });

      // Adiciona um novo documento à coleção livrosEmprestados
      await livrosEmprestadosRef.add({
        livroId,
        usuario: localStorage.getItem('userName'),
        quantidade: quantidadeReservar,
        alunos: alunosAssociados,
        nome : nome,
  editora : editora,
  imagem : imagem,
  materia : materia,
  validade : validade,
        // Adicione outros campos conforme necessário
      });

      // Debugging
      console.log(quantidadeAtual);

      // Atualize o estado `books` para refletir a alteração no front-end
      const novosLivros = books.map((livro) =>
        livro.id === livroId
          ? { ...livro, quantidade: livro.quantidade - quantidadeReservar }
          : livro
      );
      setbooks(novosLivros);

      console.log(`Quantidade de ${quantidadeReservar} livro(s) reservada com sucesso!`);
    } else {
      // Debugging
      const quantidadeAtual = livroSelecionado.quantidade;

      // Adiciona um novo documento à coleção livrosEmprestados
      await livrosEmprestadosRef.add({
        livroId,
        usuario: localStorage.getItem('userName'),
        quantidade:  quantidadeAtual,
        alunos: alunosAssociados,
        nome : nome,
  editora : editora,
  imagem : imagem,
  materia : materia,
  validade : validade,
        // Adicione outros campos conforme necessário
      });
      await docRef.delete();

      // Atualize o estado `books` para refletir a exclusão no front-end
      const novosLivros = books.filter((livro) => livro.id !== livroId);
      setbooks(novosLivros);

      console.log(`Livro reservado com sucesso!`);
      console.log('Quantidade a reservar é maior ou igual à quantidade atual.');
    }
  } catch (error) {
    console.error('Erro ao reservar livro:', error);
  }
};


  
  
  
  
  
  
  
  




  return (
    <div className="overflow-x-auto tablePage">

      <Link to={'/CadastroLI'} className="btn btn-primary btn-sm mt-4">Adicionar</Link>

      <h1 className="stat-value">Livros Disponiveis</h1>
      <div className="overflow-x-auto">
        <table className="table">

          <thead>
            <tr>
              <th></th>
              <th>Titulo / Autor</th>
              <th>Validade</th>
              <th>Materia / Quantidade</th>
              <th>Emprestimo</th>
              <th>Configurar</th>
            </tr>
          </thead>


          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-primary-content">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      {book.imagem != '' ? (
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={book.imagem}
                            alt="Capa do Livro Didático"
                          />
                        </div>
                      ) : (
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://www.boldstrokesbooks.com/assets/bsb/images/book-default-cover.jpg"
                            alt="Capa do Livro Didático"
                          />
                        </div>
                      )}



                    </div>
                    <div>
                      <div className="font-bold">{book.nome}</div>
                      <div className="text-sm opacity-50">{book.editora}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-sm opacity-50">{book.validade}</div>

                </td>
                <td>
                  {book.materia}
                  <br />
                  <span className="badge badge-ghost badge-sm">{book.quantidade} Livros</span>
                </td>
                <th>
      <label
        htmlFor={`my_modal_${book.id}`}
        className="btn btn-ghost btn-xs text-white"
        style={{ backgroundColor: 'rgb(0, 168, 244)' }}
      >
        Reservar
      </label>
      <input type="checkbox" id={`my_modal_${book.id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="stat-value text-lg">Reserve esse livro!</h3>
          <p className="py-4">Digite a quantidade</p>
          <input
            type="number"
            placeholder="Digite a quantidade"
            className="input input-bordered input-info w-full max-w-sm"
            value={quantidadeReservar}
            onChange={(e) => handleQuantidadeChange(e.target.value)}
          />
          {/* Adicionando tabela para inserir nomes dos alunos */}
          <table className="table mt-4">
            <thead>
              <tr>
                <th>Aluno</th>
              </tr>
            </thead>
            <tbody>
              {alunosAssociados.map((aluno, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      placeholder={`Nome do Aluno ${index + 1}`}
                      className="input input-bordered"
                      value={aluno}
                      onChange={(e) => handleAlunoChange(index, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="modal-action">
            <label className="btn btn-primary" onClick={() => handleEmprestimo(book.id, quantidadeReservar, alunosAssociados, book.nome,
              book.editora,
              book.imagem,
              book.materia,
              book.validade)}>
              Reservar
            </label>
            <label htmlFor={`my_modal_${book.id}`} className="btn">
              Fechar
            </label>
          </div>
        </div>
      </div>
    </th>



                <th>
                  <label
                    htmlFor={`my_modal_${book.id}`}
                    className="btn btn-ghost btn-xs text-white"
                    style={{ backgroundColor: 'red' }}
                    onClick={() => { console.log(book.quantidade) }}
                  >
                    Excluir
                  </label>
                  <input type="checkbox" id={`my_modal_${book.id}`} className="modal-toggle" />
                  <div className="modal">
                    <div className="modal-box">
                      <h3 className="stat-value text-lg">Exclua/edita a quantidade desse livro !</h3>
                      <p className="py-4">Digite a quantidade a ser excluída:</p>
                      <input
                        type="number"
                        placeholder="Digite a quantidade"
                        className="input input-bordered input-error w-full max-w-sm"
                        value={quantidadeExcluir}
                        onChange={(e) => setQuantidadeExcluir(e.target.value)}
                      />

                      <div className="modal-action">
                        <label className="btn btn-error" onClick={() => handleExcluir(book.id, quantidadeExcluir)}>
                          Excluir
                        </label>


                        <label className="btn" htmlFor={`my_modal_${book.id}`}>
                          Sair
                        </label>

                      </div>
                    </div>
                  </div>
                </th>

                <th>


                </th>
              </tr>
            ))}
          </tbody>

        </table>

      </div>



      <Alert text={'Você está entrando como ' + localStorage.getItem('userEmail')} />
    </div>
  );
}




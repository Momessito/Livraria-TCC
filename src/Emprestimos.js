import { React, useEffect, useState } from "react";
import { FieldValue, auth, db, getEmprestimos, getLivros } from "./BackEnd/Firebase";
import Alert from './Components/Alert';
import { Link } from "react-router-dom";
import firebase from "./BackEnd/Firebase";
const { firestore } = firebase;

export default function Emprestimos() {
  const [selectAll, setSelectAll] = useState(false);
  const [books, setbooks] = useState([]);
  const [quantidadeReservar, setQuantidadeReservar] = useState(0);
  const [quantidadeReservarInt, setQuantidadeReservarInt] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [quantidadeExcluir, setQuantidadeExcluir] = useState(0);
  const [alunosAssociados, setAlunosAssociados] = useState(Array.from({ length: 0 }, () => ''));


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
      const livrosData = await getEmprestimos();
      console.log("Dados de Livros:", livrosData);
      setbooks(livrosData);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const handleExcluir = async (livroId, quantidadeExcluir) => {
    quantidadeExcluir = Number(quantidadeExcluir);
    try {
      const livrosRef = db.collection('livrosEmprestados');
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


  const handleDevolucao = async (livroEmprestadoId) => {
    try {
      const livrosEmprestadosRef = db.collection('livrosEmprestados');
      const livroEmprestadoDocRef = livrosEmprestadosRef.doc(livroEmprestadoId);
  
      const livroEmprestadoSnapshot = await livroEmprestadoDocRef.get();
  
      if (livroEmprestadoSnapshot.exists) {
        const livroEmprestadoData = livroEmprestadoSnapshot.data();
  
        // Verifica se o documento original existe antes de tentar atualizá-lo
        const livrosRef = db.collection('livros');
        const livroOriginalDocRef = livrosRef.doc(livroEmprestadoData.livroId);
        const livroOriginalSnapshot = await livroOriginalDocRef.get();
  
        if (livroOriginalSnapshot.exists) {
          // Atualiza a quantidade no livro original
          await livroOriginalDocRef.update({
            quantidade: FieldValue.increment(livroEmprestadoData.quantidade),
          });
        } else {
          // Se o livro original não for encontrado, adiciona um novo com as informações do livro emprestado
          await livrosRef.add({
            nome: livroEmprestadoData.nome,
            editora: livroEmprestadoData.editora,
            imagem: livroEmprestadoData.imagem,
            materia: livroEmprestadoData.materia,
            quantidade: livroEmprestadoData.quantidade,
            validade: livroEmprestadoData.validade,
            emprestimos: [],
          });
        }
  
        // Exclui o registro de empréstimo
        await livroEmprestadoDocRef.delete();
  
        // Atualiza a lista de livros
        fetchData();
  
        console.log('Livro devolvido com sucesso!');
      } else {
        console.error('Registro de empréstimo não encontrado.');
      }
    } catch (error) {
      console.error('Erro ao devolver livro:', error);
    }
  };
  
  const handleOpenAlunosModal = (livroId) => {
    const modal = document.getElementById(`alunos_associados_${livroId}`);
    if (modal) {
      modal.showModal();
    }
  };
  
  const handleCloseAlunosModal = (livroId) => {
    const modal = document.getElementById(`alunos_associados_${livroId}`);
    if (modal) {
      modal.close();
    }
  };
  
  










  return (
    <div className="overflow-x-auto tablePage">
      <h1 className="stat-value">Livros Emprestados</h1>
      <div className="overflow-x-auto">
        <table className="table">

          <thead>
            <tr>
              <th></th>
              <th>Titulo / Autor</th>
              <th>Validade</th>
              <th>Materia / Quantidade</th>
              <th>Professor</th>
              <th>Alunos</th>
              <th>Configurar</th>
            </tr>
          </thead>


          <tbody className="tabela">
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
                <th>                  <div className="text-sm opacity-50">{book.usuario}</div>
                </th>
                
                <th key={book.id}>
    <label
      htmlFor={`alunos_associados_${book.id}`}
      className="btn btn-ghost btn-xs text-white"
      style={{ backgroundColor: 'blue' }}
    >
      Alunos Associados
    </label>
    <input type="checkbox" id={`alunos_associados_${book.id}`} className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
        <h3 className="stat-value text-lg">Alunos Associados</h3>
        <ul>
          {book.alunos.map((aluno, index) => (
            <li key={index}>{aluno}</li>
          ))}
        </ul>
        <div className="modal-action">
          <label className="btn" htmlFor={`alunos_associados_${book.id}`}>
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
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleExcluir(book.id, quantidadeExcluir);
                          }
                        }}
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
              </tr>
            ))}
          </tbody>

        </table>

      </div>



      <Alert text={'Você está entrando como ' + localStorage.getItem('userEmail')} />
    </div>
  );
}
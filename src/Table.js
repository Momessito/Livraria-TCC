import {React,useEffect, useState } from "react";
import { auth, db, getLivros } from "./BackEnd/Firebase";
import Alert from './Components/Alert';
import { Link } from "react-router-dom";
import firebase from "./BackEnd/Firebase";
const { firestore } = firebase;


export default function Table() {
  const [selectAll, setSelectAll] = useState(false);
const [books, setbooks] = useState([]);
const [quantidade, setQuantidade] = useState(0);
const [isLoggedIn, setIsLoggedIn] = useState(false);

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
  try {
    const livrosRef = db.collection('livros');
    const docRef = livrosRef.doc(livroId);

    // Verifica se a quantidade a ser excluída é menor que a quantidade atual
    if (quantidadeExcluir < books.find((livro) => livro.id === livroId).quantidade) {
      // Atualiza a quantidade subtraindo a quantidadeExcluir
      await docRef.update({
        quantidade: firestore.FieldValue.increment(-quantidadeExcluir),
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
          {book.imagem != null ? (
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
         htmlFor="my_modal_6"
          className="btn btn-ghost btn-xs text-white"
          style={{ backgroundColor: 'rgb(0, 168, 244)' }}
        >
          Reservar
        </label>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="stat-value text-lg">Reserve esse livro !</h3>
    <p className="py-4">Digite a quantidade</p>
    <input type="number" placeholder="Digite a quantidade" className="input input-bordered input-info w-full max-w-sm" />
    <div className="modal-action">
      <label className="btn btn-primary">Reservar</label>
      <label htmlFor="my_modal_6" className="btn">Fechar</label>
    </div>
  </div>
  </div>
      </th>
      <th>
  <label
    htmlFor={`my_modal_${book.id}`}
    className="btn btn-ghost btn-xs text-white" 
    style={{backgroundColor : 'red'}}
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
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
      />
      <div className="modal-action">
        <label className="btn btn-error" onClick={() => handleExcluir(book.id, quantidade)}>
          Excluir
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




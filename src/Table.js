import {React,useEffect, useState } from "react";
import { auth, getLivros } from "./BackEnd/Firebase";
import Alert from './Components/Alert';


export default function Table() {
  const [selectAll, setSelectAll] = useState(false);
const [books, setbooks] = useState([]);

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

  fetchData();
}, []);
  return (
    <div className="overflow-x-auto tablePage">

<label htmlFor="my_modal_6" className="btn btn-primary btn-sm mt-4">Adicionar</label>
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
      <div className="overflow-x-auto">
        <table className="table">
        <thead>
      <tr>
        <th></th>
        <th>Titulo / Autor</th>
        <th>Validade</th>
        <th>Materia / Quantidade</th>
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
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://www.boldstrokesbooks.com/assets/bsb/images/book-default-cover.jpg"
                alt="Capa do Livro Didático"
              />
            </div>
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
        <button
          className="btn btn-ghost btn-xs"
        >
          Editar
        </button>
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




import {React,useEffect, useState } from "react";
import {
  getLivros,
} from "./BackEnd/Firebase";
import Alert from './Components/Alert';

export default function Table() {
  const [selectAll, setSelectAll] = useState(false);
const [books, setbooks] = useState([]);

useEffect(() => {
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
        <th>Professor / Materia</th>
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
            <div className="font-bold">{book.titulo}</div>
            <div className="text-sm opacity-50">{book.Autor}</div>
          </div>
        </div>
      </td>
      <td>
        {book.Professor}
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



